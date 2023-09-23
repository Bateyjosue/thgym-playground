export function checkLogs(log: string[]): number {
    return log.length != 0
      ? log.filter((el, index) => log[index] >= log[index + 1] && index < log.length).length + 1
      : 0
  }