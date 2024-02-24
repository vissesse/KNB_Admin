import { Input } from "@/components/ui/input"
import { TableGroup } from "./table-group"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { DialogClose, DialogTrigger } from "@radix-ui/react-dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const GroupManager = () => {


    return (
        <>
            <div className="max-w-4xl mx-auto space-y-4">
                <h2 className="text-2xl font-bold">Group management</h2>
                <div className="flex items-center justify-between">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button>
                                <PlusCircle className="w-4 h-4 mr-2" />
                                Add group
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Add new Group</DialogTitle>
                                <DialogDescription>Add a new group on data base</DialogDescription>
                            </DialogHeader>
                            <form className="space-y-2 items-center justify-between">
                                <div className="grid grid-cols-4 gap-2 space-y-1">
                                    <div className="space-y-3 ">
                                        <Label className="font-semibold" htmlFor="slug">slug</Label>
                                        <Input type="text" name="slug" placeholder="my_group" />
                                    </div> 
                                    <div className="space-y-2 col-span-3">
                                        <Label className="font-semibold" htmlFor="name">Name</Label>
                                        <Input type="text" name="name" placeholder="My group"/>
                                    </div>
                                </div>
                                <Label className="font-semibold" htmlFor="bio">Description</Label>
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
                </div>
                <div className="p-2 border rounded-lg"> 
                    <TableGroup />
                </div>
            </div>
        </>
    )
}

export { GroupManager }