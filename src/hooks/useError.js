import React, { useState, useEffect } from 'react';

export default function useError(value) {
    const [ error, setError ] = useState(value);

    return error;
}