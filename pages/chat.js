import { useEffect, useCallback, useState } from "react";
import DashboardLayout from "layouts/DashboardLayout";
import Chat from "../layouts/Chat";
import toast from "../components/Toast";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export default function Home({ isConnected }) {
    return (
        <div>
            <DashboardLayout pageName="Dashboard">
                <Chat />
            </DashboardLayout>
        </div>
    );
}

export async function getServerSideProps() {
    try {
        return {
            props: { isConnected: true },
        };
    } catch (e) {
        console.error(e);
        return {
            props: { isConnected: false },
        };
    }
}
