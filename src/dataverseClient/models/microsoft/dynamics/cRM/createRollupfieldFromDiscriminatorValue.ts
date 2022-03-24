import {Rollupfield} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRollupfieldFromDiscriminatorValue(parseNode: ParseNode | undefined) : Rollupfield {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Rollupfield();
}
