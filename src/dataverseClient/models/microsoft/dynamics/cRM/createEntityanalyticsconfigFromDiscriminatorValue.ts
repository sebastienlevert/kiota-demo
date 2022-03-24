import {Entityanalyticsconfig} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEntityanalyticsconfigFromDiscriminatorValue(parseNode: ParseNode | undefined) : Entityanalyticsconfig {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Entityanalyticsconfig();
}
