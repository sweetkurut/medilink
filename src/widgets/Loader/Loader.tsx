import s from "./Loader..module.scss";

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
    return (
        <div className={s.box}>
            <div className={s.loader}></div>
        </div>
    );
};
