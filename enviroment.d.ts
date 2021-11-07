declare global {
    namespace NodeJS {
        interface ProcessEnv {
            botToken: string;
            guildId: string;
            enviroment: "dev" | "prod" | "debug";
        }
    }
}

export {};
