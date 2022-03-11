/**
 * Enum for countdown config local storage keys.
 *
 * All references to hours are inside 24 hours.
 *
 * @readonly
 * @enum {string}
 */
const CountdownConfigKey = Object.freeze({
  MIDWEEK_HOUR:         "countdownConfig.midweekTime.hour",
  MIDWEEK_MIN:          "countdownConfig.midweekTime.min",
  WEEKEND_HOUR:         "countdownConfig.weekendTime.hour",
  WEEKEND_MIN:          "countdownConfig.weekendTime.min",
  /** The cue to share the configurable final reminders expressed as a number of seconds before the meeting. */
  FINAL_REMINDERS_CUE:  "countdownConfig.finalReminders.cue",
});

/**
 * The countdown config that when requested or saved is cached and can be accessed from any page.
 * @type {{midweekTime: Date, weekendTime: Date, finalRemindersCue: number, clear(): void}}
 */
export var countdownConfigStorage = {
  /**
   * The midweek meeting time saved to local storage.
   * @return {Date}
   */
  get midweekTime() {
    const hours = localStorage.getItem(CountdownConfigKey.MIDWEEK_HOUR)
    const minutes = localStorage.getItem(CountdownConfigKey.MIDWEEK_MIN)

    const time = new Date.now()
    time.setHours(parseInt(hours))
    time.setMinutes(parseInt(minutes))
    return time
  },
  /** @param {Date} _time */
  set midweekTime(_time) {
    const hours = _time.getHours().toString()
    const minutes = _time.getMinutes().toString()
    localStorage.setItem(CountdownConfigKey.MIDWEEK_HOUR, hours)
    localStorage.setItem(CountdownConfigKey.MIDWEEK_MIN, minutes)
  },

  /**
   * The weekend meeting time saved to local storage.
   * @return {Date}
   */
  get weekendTime() {
    const hours = localStorage.getItem(CountdownConfigKey.WEEKEND_HOUR)
    const minutes = localStorage.getItem(CountdownConfigKey.WEEKEND_MIN)

    const time = new Date.now()
    time.setHours(parseInt(hours))
    time.setMinutes(parseInt(minutes))
    return time
  },
  /** @param {Date} _time */
  set weekendTime(_time) {
    const hours = _time.getHours().toString()
    const minutes = _time.getMinutes().toString()
    localStorage.setItem(CountdownConfigKey.WEEKEND_HOUR, hours)
    localStorage.setItem(CountdownConfigKey.WEEKEND_MIN, minutes)
  },

  /**
   * The seconds saved to local storage before the configured meeting time to cue the final reminders.
   * @return {number}
   */
  get finalRemindersCue() {
    const cue = localStorage.getItem(CountdownConfigKey.FINAL_REMINDERS_CUE)
    return parseInt(cue)
  },
  /** @param {number} seconds */
  set finalRemindersCue(seconds) {
    localStorage.setItem(CountdownConfigKey.FINAL_REMINDERS_CUE, seconds.toString())
  },

  /**
   * Clears the local storage.
   */
  clear() {
    localStorage.clear()
  },
}
