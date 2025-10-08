import React from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Spinner,
    getKeyValue,
    Dropdown,
    DropdownTrigger,
    Button,
    DropdownMenu,
    DropdownItem,
    Chip,
} from "@heroui/react";
import { useInfiniteScroll } from "@heroui/use-infinite-scroll";
import { useAsyncList } from "@react-stately/data";
import { VerticalDotsIcon } from "@/app/admin/components/taskTable";
import { ChatBubbleBottomCenterIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import { PlusIcon } from "@heroicons/react/24/outline";

export default function App() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [hasMore, setHasMore] = React.useState(false);

    let list = useAsyncList({
        async load({ signal, cursor }) {
            if (cursor) {
                setIsLoading(false);
            }

            // Mock API response
            let json = {
                results: [
                    {
                        id: "1",
                        date: "2023-10-10",
                        type: "Call",
                        note: "Discussed project requirements and next steps.",
                    },
                    {
                        id: "2",
                        date: "2023-10-12",
                        type: "Email",
                        note: "Sent proposal to client.",
                    },
                ],
                next: null, // mock pagination end
            };

            setHasMore(json.next !== null);

            return {
                items: json.results,
                cursor: json.next,
            };
        },
    });

    const [loaderRef, scrollerRef] = useInfiniteScroll({
        hasMore,
        onLoadMore: list.loadMore,
    });

    const renderCell = React.useCallback((lead, columnKey) => {
        const cellValue = lead[columnKey];

        switch (columnKey) {
            case "date":
                const d = new Date(lead.date);
                const day = d.getDate();
                const month = d.toLocaleString("en-US", { month: "short" }); // Jan, Feb, Mar
                const year = d.getFullYear();
                return (
                     <div className="flex flex-col items-center justify-center w-12 h-12 rounded-md bg-white shadow text-center">
      <span className="text-xs font-semibold bg-primary-500 text-white w-full rounded-md">{month}</span>
      <span className="text-base font-bold text-gray-800">{day}</span>
      <span className="text-[10px] text-gray-500 font-bold pb-2">{year}</span>

    </div>
                );
            case "type":
                return (
                    <Chip className="capitalize" color={"secondary"} size="sm" variant="flat">
                        {cellValue}
                    </Chip>
                );
            case "actions":
                return (
                    <div className="relative flex justify-end items-center gap-2">
                        <Dropdown>
                            <DropdownTrigger>
                                <Button isIconOnly size="sm" variant="light">
                                    <VerticalDotsIcon className="text-default-300" />
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu>
                                <DropdownItem key="edit">Edit</DropdownItem>
                                <DropdownItem key="delete">Delete</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                );
            default:
                return cellValue;
        }
    }, []);

    return (
        <div>
                <div className="flex items-center justify-between pb-2">
            <h1 className="font-bold text-md py-2 text-gray-700 flex items-center gap-2"><ChatBubbleLeftRightIcon className="w-5"/> Engagement History</h1>
            <button
          className="bg-[#c9d5e0] [transform-style:preserve-3d] mix-blend-hard-light shadow-[6px_6px_6px_-2px_rgba(0,0,0,0.15),inset_4px_4px_3px_rgba(255,255,255,0.75),-4px_-4px_8px_rgba(255,255,255,0.55),inset_-1px_-1px_3px_rgba(0,0,0,0.2)] items-center relative p-2 px-3 rounded-[12px] flex gap-2 text-xs">
          <PlusIcon className="w-4" /> Add
        </button>
        </div>

            <Table
                isHeaderSticky
                aria-label="Example table with infinite pagination"
                baseRef={scrollerRef}
                bottomContent={
                    hasMore ? (
                        <div className="flex w-full justify-center">
                            <Spinner ref={loaderRef} color="white" />
                        </div>
                    ) : null
                }
                classNames={{
                    base: "max-h-[220px] overflow-scroll",
                }}
            >
                <TableHeader>
                    <TableColumn key="date">Date</TableColumn>
                    <TableColumn key="type">Type</TableColumn>
                    <TableColumn key="note">Note</TableColumn>
                    <TableColumn key="actions">Actions</TableColumn>
                </TableHeader>
                <TableBody
                    isLoading={isLoading}
                    items={list.items}
                    loadingContent={<Spinner color="white" />}
                >
                    {(item) => (
                        <TableRow key={item.id} className="text-xs">
                            {(columnKey) => (
                                <TableCell className="text-xs">{renderCell(item, columnKey)}</TableCell>
                            )}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
