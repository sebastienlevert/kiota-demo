import {Msdyn_icebreakersconfig} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_icebreakersconfigFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_icebreakersconfig {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_icebreakersconfig();
}
