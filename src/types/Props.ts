import { ReactNode } from "react";

export type Props = {
    children?: string | JSX.Element | JSX.Element[] | ReactNode | null;
    className?: string;
}