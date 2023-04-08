import React  from "react";
import { ApiOnlineStoreConsumer } from "../components/apiOnlineStoreContext";

export const withApiOnlineStore = (Wrapper) => {
    return (props) => {
        return (
            <ApiOnlineStoreConsumer>
                {(apiOnlineStore) => {
                    return <Wrapper { ...props } apiOnlineStore={ apiOnlineStore } />
                }}
            </ApiOnlineStoreConsumer>
        );
    }
}