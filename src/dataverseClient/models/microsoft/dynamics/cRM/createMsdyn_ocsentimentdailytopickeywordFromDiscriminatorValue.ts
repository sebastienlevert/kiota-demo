import {Msdyn_ocsentimentdailytopickeyword} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_ocsentimentdailytopickeywordFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_ocsentimentdailytopickeyword {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_ocsentimentdailytopickeyword();
}
