import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import BodyTab from "./body/BodyTab";
import CoachesTab from "./coaches tab/CoachesTab";
import TutorialsTab from "./tutorials tab/TutorialsTab";
import WorkoutTab from "./workout tab/WorkoutTab";
import SuppliersTab from "./suppliers/SuppliersTab";

const WorkoutTabs = () => {
	return (
		<TabGroup>
			<TabList className="flex gap-5 py-8 lg:pb-0 md:pt-8 tabs w-full overflow-x-scroll lg:overflow-x-visible">
				<Tab
					className={
						"tab py-3 px-10 w-full md:w-40 rounded-[30px] data-[selected]:border-[#3D2278] data-[selected]:border-[2px] data-[selected]:text-[#3D2278] text-base font-medium data-[selected]:font-semibold data-[selected]:focus:outline-none"
					}
				>
					Body
				</Tab>

				<Tab
					className={
						"tab py-3 px-10 w-full md:w-40 rounded-[30px] data-[selected]:border-[#3D2278] data-[selected]:border-[2px] data-[selected]:text-[#3D2278] text-base font-medium data-[selected]:font-semibold data-[selected]:focus:outline-none"
					}
				>
					Workout
				</Tab>

				<Tab
					className={
						"tab py-3 px-10 w-full md:w-40 rounded-[30px] data-[selected]:border-[#3D2278] data-[selected]:border-[2px] data-[selected]:text-[#3D2278] text-base font-medium data-[selected]:font-semibold data-[selected]:focus:outline-none"
					}
				>
					Coaches
				</Tab>

				<Tab
					className={
						"tab py-3 px-10 w-full md:w-40 rounded-[30px] data-[selected]:border-[#3D2278] data-[selected]:border-[2px] data-[selected]:text-[#3D2278] text-base font-medium data-[selected]:font-semibold data-[selected]:focus:outline-none"
					}
				>
					Tutorials
				</Tab>
				<Tab
					className={
						"tab py-3 px-10 w-full md:w-40 rounded-[30px] data-[selected]:border-[#3D2278] data-[selected]:border-[2px] data-[selected]:text-[#3D2278] text-base font-medium data-[selected]:font-semibold data-[selected]:focus:outline-none"
					}
				>
					Store
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
					<CoachesTab />
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
