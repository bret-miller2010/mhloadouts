/** @format */
"use client";

export default function LandingPage() {
    return (
        <div className="w-3/4 h-screen mx-auto bg-red-500 mt-20">
            <div className="flex justify-between">
                <div>Basic Info</div>
                <div>Ad</div>
            </div>
            <div className = "flex justify-between">
              {/* Create component for each of these */}
                <div>Builds</div>
                <div>Weapons</div>
                <div>Monster Guides</div>
            </div>
            <div className="flex justify-center">Discover More Builds</div>
            <div className="flex justify-center">Divider</div>
            <div className="flex justify-center">List of Top Builds</div>
            <div className="flex justify-center">Latest Guides</div>
        </div>
    );
}
