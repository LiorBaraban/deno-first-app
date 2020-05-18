import * as log from "https://deno.land/std/log/mod.ts";


console.log('before log setup')

await log.setup({
    handlers: {
      console: new log.handlers.ConsoleHandler("DEBUG"),
      file: new log.handlers.FileHandler("WARNING", {
        filename: "./log.txt",
        // you can change format of output message using any keys in `LogRecord`
        formatter: "{levelName} {msg}",
      }),
    },
    loggers: {
      // configure default logger available via short-hand methods above
      default: {
        level: "DEBUG",
        handlers: ["console", "file"],
      },
      tasks: {
        level: "ERROR",
        handlers: ["console"],
      },
    },
  });

console.log('after log setup')

export const logger = log.getLogger();

export const LogLevels = log.LogLevels;