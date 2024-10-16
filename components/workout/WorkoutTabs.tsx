import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import BodyTab from "./body/BodyTab";
import MaterialsTab from "./materials tab/MaterialsTab";
import TutorialsTab from "./tutorials tab/TutorialsTab";
import WorkoutTab from "./workout tab/WorkoutTab";
import SuppliersTab from "./suppliers/SuppliersTab";

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

				<Tab
					className={
						"tab py-3 w-36 rounded-[30px] data-[selected]:border-[#3D2278] data-[selected]:border-[2px] data-[selected]:text-[#3D2278] text-base font-medium data-[selected]:font-semibold data-[selected]:focus:outline-none"
					}
				>
					Materials
				</Tab>

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
