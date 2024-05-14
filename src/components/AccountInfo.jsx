import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

function AccountInfo({ userData = {}, handleChange }) {
  const { email, photoURL, displayName, username } = userData;
  return (
    <Dialog>
      <DialogTrigger className="text-left pb-5 border-b-2 flex gap-2 items-center w-full">
        <Avatar>
          {photoURL ? (
            <AvatarImage src={photoURL} alt="Profile picture" />
          ) : (
            <AvatarFallback className="bg-[#173EA5] text-white">
              {displayName[0]}
            </AvatarFallback>
          )}
        </Avatar>
        <p className="text-lg font-semibold">{displayName}</p>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] w-11/12 p-5">
        <DialogHeader>
          <DialogTitle>Editar perfil</DialogTitle>
          <DialogDescription>
            Faça as alterações do seu perfil aqui. Após isso, clique em
            "Salvar".
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nome
            </Label>
            <Input
              id="name"
              defaultValue={displayName}
              className="col-span-3"
              disabled
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue={username}
              className="col-span-3"
              name="username"
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              E-mail
            </Label>
            <Input
              id="email"
              defaultValue={email}
              className="col-span-3"
              disabled
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose className="flex gap-4">
            <Button type="submit" variant="outline">
              Alterar senha
            </Button>
            <Button type="submit">Salvar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AccountInfo;
