import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Filter, Search } from "lucide-react"

export function SideFilter() {
    return (
        <form>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline">
                        <Filter className="w-4 h-4" />
                        Filter
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Filter Users</SheetTitle>
                        <SheetDescription>
                            Make changes to your profile here. Click save when you're done.
                        </SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Fullname
                            </Label>
                            <Input id="name" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Username
                            </Label>
                            <Input id="username" placeholder="cvissesse" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="date" className="text-right">
                                Created date
                            </Label>
                            <Input id="date" type="date" placeholder="Admin" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="group" className="text-right">
                                Group
                            </Label>
                            <Select>
                                <SelectTrigger id="group" className="col-span-3">
                                    <SelectValue placeholder="Select group" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="next">Admin</SelectItem>
                                    <SelectItem value="sveltekit">Manager</SelectItem>
                                    <SelectItem value="astro">Supervisor</SelectItem>
                                    <SelectItem value="nuxt">Anounimum</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="role" className="text-right">
                                Role
                            </Label>
                            <Select >
                                <SelectTrigger id="role" className="col-span-3">
                                    <SelectValue placeholder="Select role" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="next">Agent</SelectItem>
                                    <SelectItem value="sveltekit">Supervisor</SelectItem>
                                    <SelectItem value="astro">Admin</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <SheetFooter>
                        {/* <SheetClose asChild> */}
                        <Button type="submit">Search <Search className="w-4 h-4 mx-1" /></Button>
                        {/* </SheetClose> */}
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </form>
    )
}
