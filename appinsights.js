{
    backends: [ "appinsights-statsd-deo" ],
    aiInstrumentationKey: process.env.AI_INSTRUMENTATION_KEY,
    aiPrefix: process.env.AI_PREFIX,
    debug: process.env.DEBUG,
    aiRoleName: process.env.AI_ROLE_NAME,
    aiRoleInstance: process.env.AI_ROLE_INSTANCE
}
