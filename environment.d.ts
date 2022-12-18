declare global {
    namespace NodeJS {
        interface ProcessEnv {
            botToken: string;
            guildId: string;
            environments: "dev" | "prod" | "debug";
        }
    }
}

export {};
