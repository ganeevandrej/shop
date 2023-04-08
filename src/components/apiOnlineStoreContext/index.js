import { createContext } from "react";

const {
    Provider: ApiOnlineStoreProvider,
    Consumer: ApiOnlineStoreConsumer
} = createContext([]);

export { ApiOnlineStoreProvider, ApiOnlineStoreConsumer };