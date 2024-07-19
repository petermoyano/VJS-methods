Sub SendAppointmentEmails()
    Dim xlApp As Object
    Dim xlWorkbook As Object
    Dim xlSheet As Object
    Dim i As Integer
    Dim lastRow As Integer
    Dim mailItem As Outlook.MailItem
    Dim fullEntry As String
    Dim emailStart As Integer
    Dim emailEnd As Integer
    Dim recipientEmail As String
    Dim recipientName As String

    ' Initialize Excel application
    Set xlApp = CreateObject("Excel.Application")
    xlApp.Visible = False  ' Set to True if you want to see Excel

    ' Open the Excel workbook with your data
    Set xlWorkbook = xlApp.Workbooks.Open("C:\Path\To\Your\excel_file.xlsx")  ' Update the path
    Set xlSheet = xlWorkbook.Sheets(1)  ' Assumes data is in the first sheet

    ' Find the last row with data
    lastRow = xlSheet.Cells(xlSheet.Rows.Count, "A").End(-4162).Row

    ' Loop through each row (assuming data starts at row 1)
    For i = 1 To lastRow
        fullEntry = xlSheet.Cells(i, 4).Value ' Column D contains the full entry "Name <Email>"
        emailStart = InStr(fullEntry, "<")
        emailEnd = InStr(fullEntry, ">")

        If emailStart > 0 And emailEnd > 0 Then
            recipientEmail = Mid(fullEntry, emailStart + 1, emailEnd - emailStart - 1)
            recipientName = Trim(Left(fullEntry, emailStart - 1))
        End If

        ' Prepare and send email
        Set mailItem = Application.CreateItem(olMailItem)
        mailItem.To = recipientEmail
        mailItem.Subject = "Your Appointment Confirmation"
        mailItem.HTMLBody = "Dear " & recipientName & ", your appointment details will follow."
        mailItem.Send
    Next i

    ' Clean up
    xlWorkbook.Close SaveChanges:=False
    xlApp.Quit
    Set xlSheet = Nothing
    Set xlWorkbook = Nothing
    Set xlApp = Nothing
    Set mailItem = Nothing
End Sub
