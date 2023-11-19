import time
import asyncio

async def make_breakfast():
  async def make_coffee():
    print("Start coffee")
    await asyncio.sleep(3)
    print("Finished coffee")

  async def make_toasts():
    print("Starting toasts")
    await asyncio.sleep(2)
    print("Finished toasts")

  await asyncio.gather(make_coffee(), make_toasts())

async def main():
  start = time.time()
  await make_breakfast()
  finish = time.time()
  print(finish - start)

if __name__ == '__main__':
  asyncio.run(main())