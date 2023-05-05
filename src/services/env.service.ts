import { config } from "dotenv";

interface IEvironment {
    MYSQL_PORT: string;
    MYSQL_UNAME: string;
    MYSQL_UPASS: string;
    MYSQL_HOST: string;
    MYSQL_DB: string;
    BASE_URL: string;
    ADMIN_ROLE: string;
}
const environmentVariable = (): IEvironment => {
    if (process.env.NODE_ENV !== 'PROD') {
        config({ path: `${__dirname}/../.env` });
    }
    return {
        MYSQL_PORT: process.env.MYSQL_PORT as string,
        MYSQL_UNAME: process.env.MYSQL_UNAME as string,
        MYSQL_UPASS: process.env.MYSQL_UPASS as string,
        MYSQL_HOST: process.env.MYSQL_HOST as string,
        MYSQL_DB: process.env.MYSQL_DB as string,
        BASE_URL: process.env.BASE_URL as string,
        ADMIN_ROLE: process.env.ADMIN_ROLE as string,
    };
}
export default environmentVariable;