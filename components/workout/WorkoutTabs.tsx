import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import BodyTab from "./BodyTab";
import WorkoutTab from "./WorkoutTab";
import Link from "next/link";

const WorkoutTabs = () => {
	return (
		<TabGroup>
			<TabList className="flex gap-5 flex-wrap">
				<Tab
					className={
						"tab py-3 w-36 rounded-[30px] data-[selected]:border-[#3D2278] data-[selected]:border-[2px] data-[selected]:text-[#3D2278] text-base font-medium data-[selected]:font-semibold data-[selected]:focus:outline-none"
					}
				>
					Body
				</Tab>
				<Tab
					className={
						"tab py-3 w-36 rounded-[30px] data-[selected]:border-[#3D2278] data-[selected]:border-[2px] data-[selected]:text-[#3D2278] text-base font-medium data-[selected]:font-semibold data-[selected]:focus:outline-none"
					}
				>
					Workout
				</Tab>
				<Link href={"/aitools/workout?tab=material"}>
					<Tab
						className={
							"tab py-3 w-36 rounded-[30px] data-[selected]:border-[#3D2278] data-[selected]:border-[2px] data-[selected]:text-[#3D2278] text-base font-medium data-[selected]:font-semibold data-[selected]:focus:outline-none"
						}
					>
						Materials
					</Tab>
				</Link>
				<Tab
					className={
						"tab py-3 w-36 rounded-[30px] data-[selected]:border-[#3D2278] data-[selected]:border-[2px] data-[selected]:text-[#3D2278] text-base font-medium data-[selected]:font-semibold data-[selected]:focus:outline-none"
					}
				>
					Tutorials
				</Tab>
				<Tab
					className={
						"tab py-3 w-36 rounded-[30px] data-[selected]:border-[#3D2278] data-[selected]:border-[2px] data-[selected]:text-[#3D2278] text-base font-medium data-[selected]:font-semibold data-[selected]:focus:outline-none"
					}
				>
					Suppliers
				</Tab>
			</TabList>
			<TabPanels className="mt-20">
				<TabPanel>
					<BodyTab />
				</TabPanel>
				<TabPanel>
					<WorkoutTab />
				</TabPanel>
				<TabPanel>Content 3</TabPanel>
			</TabPanels>
		</TabGroup>
	);
};

export default WorkoutTabs;
