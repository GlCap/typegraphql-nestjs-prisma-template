declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV?: NodeEnvType;
      PORT?: string;
      DATABASE_URL?: string;
    }
  }

  export type NodeEnvType = 'development' | 'staging' | 'production';
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
