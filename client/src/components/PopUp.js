import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import axios from "axios";
import { SERVER_BASE_URL } from "../Global";
import { useRef } from "react";

export default function PopUp({ coupon }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const minSpendRef = useRef();
  const amountRef = useRef();
  const expiryDateRef = useRef();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const onDelete = () => {
    axios.delete(`${SERVER_BASE_URL}/coupons/${coupon.code}`)
      .then(() => {
        window.location.reload(false);
      })
  }

  const onUpdate = () => {

    const updatedCoupon = {
      code: coupon.code,
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      amount: Number(amountRef.current.value),
      minSpend: Number(minSpendRef.current.value),
      expiryDate: expiryDateRef.current.value
    }

    JSON.stringify(coupon) !== JSON.stringify(updatedCoupon)
      &&
      axios.put(`${SERVER_BASE_URL}/coupons`, {
        ...updatedCoupon
      }).then((res) => {
        console.log(res);
      })
  }

  return (
    <>
      <button className='bg-black p-1 text-xs rounded-md mt-2' onClick={onOpen}>Modify</button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Code: {coupon.code}</ModalHeader>
              <ModalBody>
                <Input isClearable type="text" label="Title" variant="bordered" ref={titleRef}
                  className="min-w-[220px]" defaultValue={coupon.title} size="sm"
                />
                <Input isClearable type="text" label="Description" variant="bordered" ref={descriptionRef}
                  className="min-w-[220px]" defaultValue={coupon.description} size="sm"
                />
                <Input isClearable type="number" label="Minimum Spend" variant="bordered" ref={minSpendRef}
                  className="min-w-[220px]" defaultValue={coupon.minSpend} size="sm"
                />
                <Input isClearable type="number" label="Amount" variant="bordered" ref={amountRef}
                  className="min-w-[220px]" defaultValue={coupon.amount} size="sm"
                />
                <Input isClearable type="date" label="Valid Until" variant="bordered" ref={expiryDateRef}
                  className="min-w-[220px]" defaultValue={coupon.expiryDate} size="sm"
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onClick={() => {
                    onDelete()
                    onClose()
                  }}>
                  Delete
                </Button>
                <Button color="secondary" onPress={() => {
                  onUpdate()
                  onClose()
                }}>
                  Update
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
