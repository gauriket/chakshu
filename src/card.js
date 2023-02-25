// import { PaperClipIcon } from '@heroicons/react/20/solid'
import { Donut } from "./abc"
import "./stats.css"

export default function ExampleDonut() {
  return (
    <div className="card my-10">
    <div className="overflow-hidden bg-grey shadow sm:rounded-lg my-5">
      <div className="px-4   sm:px-6">
        <h3 className="text-lg font-small leading-6 text-gray-900">Crime Analysis</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">from 1-6 Dec</p>
      </div>
      <div className="donutchart bg-white">
      <Donut/></div>
      <div className="text">
      <div className="border-t border-black-200">
        <dl>
          <div className="bg-white px-4 py-1 sm:grid sm:grid-cols-7 sm:gap-4 sm:px-3">
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Verified</dd>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Fake</dd>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Solved</dd>
          </div>
        </dl></div>
      </div>
    </div></div>
  )
}