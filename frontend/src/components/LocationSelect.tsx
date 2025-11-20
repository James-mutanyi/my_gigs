import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useKenyaLocations } from "@/hooks/useKenyaLocations";
import type { Constituency, Ward } from "@/hooks/useKenyaLocations";
import { Loader2 } from "lucide-react";

interface LocationSelectProps {
  selectedCounty?: string;
  selectedConstituency?: string;
  selectedWard?: string;
  onCountyChange: (countyId: string, countyName: string) => void;
  onConstituencyChange: (constituencyId: string, constituencyName: string) => void;
  onWardChange: (wardId: string, wardName: string) => void;
  required?: boolean;
  showLabels?: boolean;
}

export const LocationSelect = ({
  selectedCounty,
  selectedConstituency,
  selectedWard,
  onCountyChange,
  onConstituencyChange,
  onWardChange,
  required = false,
  showLabels = true,
}: LocationSelectProps) => {
  const { counties, loading: loadingCounties, fetchConstituencies, fetchWards } = useKenyaLocations();
  const [constituencies, setConstituencies] = useState<Constituency[]>([]);
  const [wards, setWards] = useState<Ward[]>([]);
  const [loadingConstituencies, setLoadingConstituencies] = useState(false);
  const [loadingWards, setLoadingWards] = useState(false);

  // Fetch constituencies when county changes
  useEffect(() => {
    if (selectedCounty) {
      setLoadingConstituencies(true);
      fetchConstituencies(Number(selectedCounty)).then((data) => {
        setConstituencies(data);
        setLoadingConstituencies(false);
      });
      // Reset lower levels
      setWards([]);
    } else {
      setConstituencies([]);
      setWards([]);
    }
  }, [selectedCounty]);

  // Fetch wards when constituency changes
  useEffect(() => {
    if (selectedConstituency && selectedCounty) {
      setLoadingWards(true);
      fetchWards(selectedConstituency, Number(selectedCounty)).then((data) => {
        setWards(data);
        setLoadingWards(false);
      });
    } else {
      setWards([]);
    }
  }, [selectedConstituency, selectedCounty]);

  const handleCountyChange = (value: string) => {
    const county = counties.find(c => c.code.toString() === value);
    onCountyChange(value, county?.name || "");
    onConstituencyChange("", "");
    onWardChange("", "");
  };

  const handleConstituencyChange = (value: string) => {
    const constituency = constituencies.find(c => c.name === value);
    onConstituencyChange(value, constituency?.name || "");
    onWardChange("", "");
  };

  const handleWardChange = (value: string) => {
    const ward = wards.find(w => w.name === value);
    onWardChange(value, ward?.name || "");
  };

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {/* County */}
      <div className="space-y-2">
        {showLabels && <Label htmlFor="county">County {required && "*"}</Label>}
        <Select value={selectedCounty} onValueChange={handleCountyChange} required={required}>
          <SelectTrigger id="county" className="h-11">
            <SelectValue placeholder={loadingCounties ? "Loading..." : "Select county"} />
          </SelectTrigger>
          <SelectContent className="bg-popover z-50 max-h-[300px]">
            {loadingCounties ? (
              <div className="flex items-center justify-center py-4">
                <Loader2 className="h-4 w-4 animate-spin" />
              </div>
            ) : (
              counties.map((county) => (
                <SelectItem key={county.code} value={county.code.toString()}>
                  {county.name}
                </SelectItem>
              ))
            )}
          </SelectContent>
        </Select>
      </div>

      {/* Constituency */}
      <div className="space-y-2">
        {showLabels && <Label htmlFor="constituency">Constituency {required && "*"}</Label>}
        <Select
          value={selectedConstituency}
          onValueChange={handleConstituencyChange}
          disabled={!selectedCounty}
          required={required}
        >
          <SelectTrigger id="constituency" className="h-11">
            <SelectValue placeholder={loadingConstituencies ? "Loading..." : "Select constituency"} />
          </SelectTrigger>
          <SelectContent className="bg-popover z-50 max-h-[300px]">
            {loadingConstituencies ? (
              <div className="flex items-center justify-center py-4">
                <Loader2 className="h-4 w-4 animate-spin" />
              </div>
            ) : (
              constituencies.map((constituency) => (
                <SelectItem key={constituency.name} value={constituency.name}>
                  {constituency.name}
                </SelectItem>
              ))
            )}
          </SelectContent>
        </Select>
      </div>

      {/* Ward */}
      <div className="space-y-2">
        {showLabels && <Label htmlFor="ward">Ward {required && "*"}</Label>}
        <Select
          value={selectedWard}
          onValueChange={handleWardChange}
          disabled={!selectedConstituency}
          required={required}
        >
          <SelectTrigger id="ward" className="h-11">
            <SelectValue placeholder={loadingWards ? "Loading..." : "Select ward"} />
          </SelectTrigger>
          <SelectContent className="bg-popover z-50 max-h-[300px]">
            {loadingWards ? (
              <div className="flex items-center justify-center py-4">
                <Loader2 className="h-4 w-4 animate-spin" />
              </div>
            ) : (
              wards.map((ward) => (
                <SelectItem key={ward.name} value={ward.name}>
                  {ward.name}
                </SelectItem>
              ))
            )}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
