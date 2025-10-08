import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  DateRangePicker,
  Autocomplete,
  AutocompleteItem,
} from "@heroui/react";
import { FunnelIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import { I18nProvider } from "@react-aria/i18n";
import { getLocalTimeZone, now, parseDate, parseDateTime } from "@internationalized/date";


export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex ">
      <div role="button" onClick={onOpen} className="px-5 py-2 flex items-center justify-center rounded-lg bg-[#c9d5e0] [transform-style:preserve-3d] mix-blend-hard-light shadow-[6px_6px_6px_-2px_rgba(0,0,0,0.15),inset_4px_4px_3px_rgba(255,255,255,0.75),-4px_-4px_8px_rgba(255,255,255,0.55),inset_-1px_-1px_3px_rgba(0,0,0,0.2)] cursor-pointer" ><FunnelIcon className="w-5 text-gray-800" /></div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center" backdrop="opaque">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex gap-3 font-extrabold items-center"> <UserGroupIcon className="w-8 text-primary" />Filter Your Leads</ModalHeader>
              <ModalBody>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                  <I18nProvider locale="en-GB">
                    <DateRangePicker label="Stay duration" visibleMonths={1} size='sm' color="" />
                  </I18nProvider>
                </div>

                
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose} className="" >
                  Apply
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
