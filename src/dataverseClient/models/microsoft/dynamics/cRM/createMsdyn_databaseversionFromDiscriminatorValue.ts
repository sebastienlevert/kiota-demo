import {Msdyn_databaseversion} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_databaseversionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_databaseversion {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_databaseversion();
}
