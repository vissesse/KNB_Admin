import { Input } from "@/components/ui/input"
import { TableUser } from "./table-users"
import { Button } from "@/components/ui/button"
import { CircleFadingPlus, PlusCircle, Search } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { DialogClose, DialogTrigger } from "@radix-ui/react-dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { SheetDemo } from "./sheet"

const UserManager = () => {


    return (
        <>
            <div className="max-w-4xl mx-auto space-y-4">
                <h2 className="text-2xl font-bold">User management </h2>
                <div className="flex items-center justify-between">
                    {/* <form className="flex items-center justify-between gap-2"> 
                        <Input placeholder="username, fullname" />
                        <Button type="submit" variant={"outline"}>
                            < Search className="w-4 h-4 mr-1" />
                            find user
                        </Button>
                        <SheetDemo />
                    </form> */}
                    
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button>
                                <PlusCircle className="w-4 h-4 mr-2" />
                                Add User
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Add new User</DialogTitle>
                                <DialogDescription>Add a new user on data base</DialogDescription>
                            </DialogHeader>
                            <form className="space-y-2 items-center justify-between">

                                <Label className="font-semibold" htmlFor="name">Fullame</Label>
                                <Input name="name" placeholder="Carlos vissesse" />

                                <div className="grid grid-cols-4 gap-2 space-y-1">
                                    <div className="space-y-1 ">
                                        <Label className="font-semibold" htmlFor="username">Username</Label>
                                        <Input type="text" name="username" placeholder="cvissesse" />
                                    </div>
                                    <div className="col-span-3  pb-2">
                                        <Label className="font-semibold" htmlFor="email">Email</Label>
                                        <Input type="email" name="email" placeholder="exemple@gmail.com" />
                                    </div>

                                    <div className="space-y-1 col-span-2">
                                        <Label className="font-semibold" htmlFor="password">Password</Label>
                                        <Input type="password" name="password" />
                                    </div>
                                    <div className="space-y-1 col-span-2">
                                        <Label className="font-semibold" htmlFor="password2">Confirm-password</Label>
                                        <Input type="password" name="password2" />
                                    </div>
                                </div>
                                <Label className="font-semibold" htmlFor="bio">Bio</Label>
                                <Textarea name="bio" placeholder="Your own bio"></Textarea>
                                <DialogFooter>
                                    <DialogClose asChild>
                                        <Button variant={"outline"}> Cancel</Button>
                                    </DialogClose>
                                    <Button type="submit" > Save </Button>
                                </DialogFooter>

                            </form>
                        </DialogContent>
                    </Dialog>
                    <SheetDemo />

                </div>
                <div className="p-2 border rounded-lg">
                    <TableUser />
                </div>
            </div>
        </>
    )
}

export { UserManager }