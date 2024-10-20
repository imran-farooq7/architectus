import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import BodyTab from "./body/BodyTab";
import MaterialsTab from "./materials tab/MaterialsTab";
import TutorialsTab from "./tutorials tab/TutorialsTab";
import WorkoutTab from "./workout tab/WorkoutTab";
import SuppliersTab from "./suppliers/SuppliersTab";

const WorkoutTabs = () => {
	return (
		<TabGroup>
			<TabList className="flex gap-5 w-[87%] tabs md:w-full overflow-x-scroll md:overflow-x-visible">
				<Tab
					className={
						"tab py-3 px-10 w-full md:w-36 rounded-[30px] data-[selected]:border-[#3D2278] data-[selected]:border-[2px] data-[selected]:text-[#3D2278] text-base font-medium data-[selected]:font-semibold data-[selected]:focus:outline-none"
					}
				>
					Body
				</Tab>

				<Tab
					className={
						"tab py-3 px-10 w-full md:w-36 rounded-[30px] data-[selected]:border-[#3D2278] data-[selected]:border-[2px] data-[selected]:text-[#3D2278] text-base font-medium data-[selected]:font-semibold data-[selected]:focus:outline-none"
					}
				>
					Workout
				</Tab>

				<Tab
					className={
						"tab py-3 px-10 w-full md:w-36 rounded-[30px] data-[selected]:border-[#3D2278] data-[selected]:border-[2px] data-[selected]:text-[#3D2278] text-base font-medium data-[selected]:font-semibold data-[selected]:focus:outline-none"
					}
				>
					Materials
				</Tab>

				<Tab
					className={
						"tab py-3 px-10 w-full md:w-36 rounded-[30px] data-[selected]:border-[#3D2278] data-[selected]:border-[2px] data-[selected]:text-[#3D2278] text-base font-medium data-[selected]:font-semibold data-[selected]:focus:outline-none"
					}
				>
					Tutorials
				</Tab>
				<Tab
					className={
						"tab py-3 px-10 w-full md:w-36 rounded-[30px] data-[selected]:border-[#3D2278] data-[selected]:border-[2px] data-[selected]:text-[#3D2278] text-base font-medium data-[selected]:font-semibold data-[selected]:focus:outline-none"
					}
				>
					Suppliers
				</Tab>
			</TabList>
			<TabPanels>
				<TabPanel>
					<BodyTab />
				</TabPanel>
				<TabPanel>
					<WorkoutTab />
				</TabPanel>
				<TabPanel>
					<MaterialsTab />
				</TabPanel>
				<TabPanel>
					<TutorialsTab />
				</TabPanel>
				<TabPanel>
					<SuppliersTab />
				</TabPanel>
			</TabPanels>
		</TabGroup>
	);
};

export default WorkoutTabs;
