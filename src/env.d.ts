/// <reference types="astro/client" />

//
interface ImportMetaEnv {
  //*  both server and client can access
  readonly BACKEND_URL: string;
  //*  environment vars for client should prefix by PUBLIC_
  //   readonly PUBLIC_POKEAPI: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// globalThis 在服务器端和客户端上都可用
declare global {}

// window 只能在客户端代码中访问
interface Window {}

export {};
