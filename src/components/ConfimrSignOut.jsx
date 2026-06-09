"use client";

import { AlertDialog, Button } from "@heroui/react";

export function ConfimrSignOut({ handleSignOut }) {
    return (
        <AlertDialog>
            <Button variant="danger">Sign Out</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading className="text-white">Are you sure? </AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary" className={'text-white'}>
                                Cancel
                            </Button>
                            <Button onClick={handleSignOut} slot="close" variant="danger">
                                Confirm Sign Out!
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}