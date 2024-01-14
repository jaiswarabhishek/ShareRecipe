import React from "react"
import { Card } from "flowbite-react"
import { useState, useContext } from "react"
import { Button, Modal, Tooltip } from "flowbite-react"
import { MdDelete } from "react-icons/md"
import {
  HiPencil,
  HiOutlineShare,
  HiOutlineExclamationCircle,
} from "react-icons/hi"
import { FiEye } from "react-icons/fi"
import { FaRegHeart } from "react-icons/fa"
import RecipeContext from "@/contexts/recipeContext"
import FormModal from "./FormModal"
import { AnimatePresence, motion } from "framer-motion"
import Share from "./Share"
import Link from "next/link"

const RecipeCard: React.FC = () => {
  const { recipeData } = useContext(RecipeContext)
  const [alert, setAlert] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  console.log(recipeData)
  return (
    <>
      <motion.div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 w-[90%] max-w-[1900px] place-items-center mx-auto text-center font-bold text-gray-700 mt-10">
        {recipeData?.map((recipe, index) => (
          <Link key={recipe.id} href={`/recipe/${recipe.id}`}>
            <AnimatePresence key={recipe.id}>
              <motion.div
                key={recipe.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: (index + 2) * 0.05,
                  ease: "easeInOut",
                }}
                style={{ opacity: "1", transform: "none" }}
              >
                <Card
                  key={recipe.id}
                  className="max-w-sm w-full md:w-[calc(33.333% - 1rem)] lg:w-[calc(25% - 1rem)] xl:w-[calc(25% - 1rem)] 2xl:w-[calc(20% - 1rem)] border-0 flex flex-col h-full"
                >
                  <div className="relative">
                    <img
                      src={recipe.image}
                      alt="Picture of the author"
                      className="w-full h-[300px] object-cover rounded-lg"
                    />
                    <div className="flex justify-evenly gap-0 mt-5">
                      <Tooltip
                        style="light"
                        animation="duration-500"
                        arrow={false}
                        content="Like"
                        placement="top"
                      >
                        <motion.div
                          whileHover={{ scale: 1.3 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={e => {
                            e.preventDefault()
                            e.stopPropagation()
                          }}
                        >
                          <FaRegHeart className="w-5 h-5 text-[rgb(63 131 248 / 0.5)] cursor-pointer" />
                        </motion.div>
                      </Tooltip>

                      <Tooltip
                        style="light"
                        arrow={false}
                        animation="duration-500"
                        content={
                          <Share image={recipe.image} name={recipe.name} />
                        }
                        placement="top"
                      >
                        <motion.div
                          whileHover={{ scale: 1.3 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={e => {
                            e.preventDefault()
                            e.stopPropagation()
                          }}
                        >
                          <HiOutlineShare className="w-5 h-5 text-[rgb(63 131 248 / 0.5)] cursor-pointer" />
                        </motion.div>
                      </Tooltip>

                      <Tooltip
                        style="light"
                        animation="duration-500"
                        arrow={false}
                        content="0 views"
                        placement="top"
                      >
                        <motion.div
                          whileHover={{ scale: 1.3 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={e => {
                            e.preventDefault()
                            e.stopPropagation()
                          }}
                        >
                          <FiEye className="w-5 h-5 text-[rgb(63 131 248 / 0.5)] cursor-pointer" />
                        </motion.div>
                      </Tooltip>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h5 className="text-xl font-bold text-left tracking-tight text-gray-900 dark:text-white">
                        {recipe.name.length > 30
                          ? `${recipe.name.slice(0, 24)}...`
                          : recipe.name}
                      </h5>
                      <p className="text-sm text-left text-gray-500 dark:text-gray-400 mt-2">
                        {recipe.description.length > 100
                          ? `${recipe.description.slice(0, 100)}...`
                          : recipe.description}
                      </p>
                    </div>
                    <div className="flex justify-between gap-2 mt-2">
                      <Button
                        onClick={e => {
                          e.preventDefault()
                          setOpenModal(true)
                          e.stopPropagation()
                        }}
                        color="gray"
                        className="font-bold w-[48%] sm:w-full"
                      >
                        <HiPencil className="mr-1 h-4 w-4 font-bold" />
                        Edit
                      </Button>
                      <Button
                        onClick={e => {
                          e.preventDefault()
                          setAlert(true)
                          e.stopPropagation()
                        }}
                        color="red"
                        className="font-bold w-[48%] sm:w-full"
                      >
                        <MdDelete className="mr-1 h-4 w-4 font-bold" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </Link>
        ))}

        <Modal
          position="center"
          show={alert}
          size="md"
          onClose={() => setAlert(false)}
          popup
        >
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to delete this Recipe?
              </h3>
              <div className="flex justify-center gap-4">
                <Button color="failure" onClick={() => setAlert(false)}>
                  {"Yes, I'm sure"}
                </Button>
                <Button color="gray" onClick={() => setAlert(false)}>
                  No, cancel
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        <FormModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          typeForm="Edit"
        />
      </motion.div>
    </>
  )
}

export default RecipeCard
