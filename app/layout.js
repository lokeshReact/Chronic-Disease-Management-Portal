import "./scss/style.scss"
import { UserContextProvider } from "@/components/context/user.context";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserContextProvider>
            {children}
        </UserContextProvider>
      </body>
    </html> 
  );
}
