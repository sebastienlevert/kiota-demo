import {Msdyn_siconfig} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_siconfigFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_siconfig {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_siconfig();
}
