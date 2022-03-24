import {Msdyn_assetsuggestionssetting} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_assetsuggestionssettingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_assetsuggestionssetting {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_assetsuggestionssetting();
}
