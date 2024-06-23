import "../../../App.css";
import Logo from "../../../components/limeGreenAndBlackLogo.svg?react";
import { Bars3Icon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";
import { Description, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

export default function MyPopover() {
    let[isOpen, setIsOpen] = useState(false)

    return (
      <>
        <button onClick={() => setIsOpen(true)} className="text-white">
        Open dialog</button>
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
        >
          <div className="fixedw-screen items-center p-4">
            <DialogPanel anchor="right" className="max-w-lg space-y-4 border bg-white p-12">
              <DialogTitle className="font-bold">
                Deactivate account
              </DialogTitle>
              <Description>
                This will permanently deactivate your account
              </Description>
              <p>
                Are you sure you want to deactivate your account? All of your
                data will be permanently removed.
              </p>
              <div className="flex gap-4">
                <button onClick={() => setIsOpen(false)}>Cancel</button>
                <button onClick={() => setIsOpen(false)}>Deactivate</button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      </>
    );
}