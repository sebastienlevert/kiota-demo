import {Msdyn_analysisresultdetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_analysisresultdetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_analysisresultdetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_analysisresultdetail();
}
