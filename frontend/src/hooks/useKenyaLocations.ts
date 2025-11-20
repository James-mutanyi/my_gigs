import { useState, useEffect } from 'react';
import kenyaData from '@/data/kenya-complete-locations.json';

export interface Ward {
  name: string;
}

export interface Constituency {
  name: string;
  wards: Ward[];
}

export interface County {
  name: string;
  code: number;
  capital?: string;
  constituencies: Constituency[];
}

export const useKenyaLocations = () => {
  const [counties, setCounties] = useState<County[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Transform the wards from string[] to Ward[]
      const transformedData = (kenyaData as any[]).map(county => ({
        ...county,
        constituencies: county.constituencies.map((constituency: any) => ({
          name: constituency.name,
          wards: constituency.wards.map((wardName: string) => ({ name: wardName }))
        }))
      }));
      setCounties(transformedData as County[]);
      setLoading(false);
    } catch (err) {
      setError('Failed to load Kenya locations data');
      console.error('Error loading Kenya locations:', err);
      setLoading(false);
    }
  }, []);

  const fetchConstituencies = async (countyCode: number): Promise<Constituency[]> => {
    try {
      const county = counties.find(c => c.code === countyCode);
      if (!county) return [];
      
      return county.constituencies || [];
    } catch (err) {
      console.error('Error fetching constituencies:', err);
      return [];
    }
  };

  const fetchWards = async (constituencyName: string, countyCode: number): Promise<Ward[]> => {
    try {
      const county = counties.find(c => c.code === countyCode);
      if (!county) return [];
      
      const constituency = county.constituencies.find(c => c.name === constituencyName);
      if (!constituency) return [];
      
      return constituency.wards || [];
    } catch (err) {
      console.error('Error fetching wards:', err);
      return [];
    }
  };

  return {
    counties,
    loading,
    error,
    fetchConstituencies,
    fetchWards,
  };
};
