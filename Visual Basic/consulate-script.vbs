Sub SendAppointmentEmails()
    Dim xlApp As Object
    Dim xlWorkbook As Object
    Dim xlSheet As Object
    Dim i As Integer
    Dim lastRow As Integer
    Dim mailItem As Outlook.MailItem
    Dim accounts As Outlook.Accounts
    Dim specificAccount As Outlook.Account
    Dim fullEntry As String
    Dim emailStart As Integer
    Dim emailEnd As Integer
    Dim recipientEmail As String
    Dim recipientName As String
    Dim appointmentDate As String
    Dim appointmentTime As Variant
    Dim formattedTime As String

    ' Initialize Excel application
    Set xlApp = CreateObject("Excel.Application")
    xlApp.Visible = False  ' Set to True if you want to see Excel

    ' Open the Excel workbook with your data
    Set xlWorkbook = xlApp.Workbooks.Open("P:\. REGISTRO CIVIL\.TURNOS LMD\TURNOS SCRIPT.xlsx")
    Set xlSheet = xlWorkbook.Sheets(1)  ' Assumes data is in the first sheet

    ' Find the last row with data
    lastRow = xlSheet.Cells(xlSheet.Rows.Count, "A").End(-4162).Row

    ' Retrieve Outlook accounts and find the specific account
    Set accounts = Outlook.Application.Session.Accounts
    For Each acc In accounts
        If acc.SmtpAddress = "cog.mendoza.lmdsol@maec.es" Then
            Set specificAccount = acc
            Exit For
        End If
    Next

    ' Loop through each row starting from row 5
    For i = 5 To lastRow
        fullEntry = xlSheet.Cells(i, 6).Value ' Column F contains the full entry "Name <Email>"
        appointmentDate = xlSheet.Cells(i, 1).Value ' Date is in column A
        appointmentTime = xlSheet.Cells(i, 2).Value ' Time is in column B
        formattedTime = Format(appointmentTime, "hh:mm") ' Format time to "hh:mm"

        ' Check for empty rows before attempting to extract email
        If Not IsEmpty(fullEntry) Then
            emailStart = InStr(fullEntry, "<")
            emailEnd = InStr(fullEntry, ">")

            If emailStart > 0 And emailEnd > 0 Then
                recipientEmail = Mid(fullEntry, emailStart + 1, emailEnd - emailStart - 1)
                recipientName = Trim(Left(fullEntry, emailStart - 1))

                ' Prepare and send email using a template
                Set mailItem = Application.CreateItemFromTemplate("P:\. REGISTRO CIVIL\.TURNOS LMD\TEMPLATE TURNOS SCRIPT.oft")
                mailItem.SendUsingAccount = specificAccount
                mailItem.To = "carina.roby@maec.es" ' recipientEmail
                mailItem.Subject = "Citas LMD"
                mailItem.HTMLBody = Replace(mailItem.HTMLBody, "{date}", appointmentDate)
                mailItem.HTMLBody = Replace(mailItem.HTMLBody, "{time}", formattedTime)
                mailItem.Send
            End If
        End If
    Next i

    ' Clean up
    xlWorkbook.Close SaveChanges:=False
    xlApp.Quit
    Set xlSheet = Nothing
    Set xlWorkbook = Nothing
    Set xlApp = Nothing
    Set mailItem = Nothing
End Sub