import { HStack, Button } from "@chakra-ui/react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import styles from "./snsLogin.module.css";

export default function SnsLogin() {
    return (
        <div className={styles.loginFrame}>
            <div className={styles.snsLogin}>소설 계정 연동</div>
            <HStack className={styles.snsLoginFrame}>
                <Button colorScheme="facebook" leftIcon={<FaFacebook />} className={styles.loginFacebook}>
                    Facebook
                </Button>
            </HStack>
            <HStack className={styles.snsLoginFrame}>
                <Button colorScheme="teal" leftIcon={<FaInstagram />} className={styles.loginInstagram}>
                    Instagram
                </Button>
            </HStack>
        </div>
    );
}
