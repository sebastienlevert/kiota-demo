import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createFileattachmentFromDiscriminatorValue} from './createFileattachmentFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Fileattachment, Mailboxtrackingfolder, Msdyn_ocliveworkitem, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_conversationinsight extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_conversationid_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_callaveragepause?: number | undefined;
    private _msdyn_callinsightduration?: number | undefined;
    private _msdyn_calllongestcustomermonologue?: number | undefined;
    private _msdyn_callswitchesperconversation?: number | undefined;
    private _msdyn_calltalkingspeed?: number | undefined;
    private _msdyn_calltalktolistenratio?: number | undefined;
    private _msdyn_ConversationId?: Msdyn_ocliveworkitem | undefined;
    private _msdyn_conversationinsight_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_conversationinsight_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_conversationinsight_FileAttachments?: Fileattachment[] | undefined;
    private _msdyn_conversationinsight_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_conversationinsight_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_conversationinsight_ProcessSession?: Processsession[] | undefined;
    private _msdyn_conversationinsight_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_conversationinsightid?: string | undefined;
    private _msdyn_insights?: string | undefined;
    private _msdyn_insights_name?: string | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_transcriptwithinsights?: string | undefined;
    private _msdyn_transcriptwithinsights_name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _createdby_value property value. 
     * @returns a string
     */
    public get _createdby_value() {
        return this.__createdby_value;
    };
    /**
     * Sets the _createdby_value property value. 
     * @param value Value to set for the _createdby_value property.
     */
    public set _createdby_value(value: string | undefined) {
        this.__createdby_value = value;
    };
    /**
     * Gets the _createdonbehalfby_value property value. 
     * @returns a string
     */
    public get _createdonbehalfby_value() {
        return this.__createdonbehalfby_value;
    };
    /**
     * Sets the _createdonbehalfby_value property value. 
     * @param value Value to set for the _createdonbehalfby_value property.
     */
    public set _createdonbehalfby_value(value: string | undefined) {
        this.__createdonbehalfby_value = value;
    };
    /**
     * Gets the _modifiedby_value property value. 
     * @returns a string
     */
    public get _modifiedby_value() {
        return this.__modifiedby_value;
    };
    /**
     * Sets the _modifiedby_value property value. 
     * @param value Value to set for the _modifiedby_value property.
     */
    public set _modifiedby_value(value: string | undefined) {
        this.__modifiedby_value = value;
    };
    /**
     * Gets the _modifiedonbehalfby_value property value. 
     * @returns a string
     */
    public get _modifiedonbehalfby_value() {
        return this.__modifiedonbehalfby_value;
    };
    /**
     * Sets the _modifiedonbehalfby_value property value. 
     * @param value Value to set for the _modifiedonbehalfby_value property.
     */
    public set _modifiedonbehalfby_value(value: string | undefined) {
        this.__modifiedonbehalfby_value = value;
    };
    /**
     * Gets the _msdyn_conversationid_value property value. 
     * @returns a string
     */
    public get _msdyn_conversationid_value() {
        return this.__msdyn_conversationid_value;
    };
    /**
     * Sets the _msdyn_conversationid_value property value. 
     * @param value Value to set for the _msdyn_conversationid_value property.
     */
    public set _msdyn_conversationid_value(value: string | undefined) {
        this.__msdyn_conversationid_value = value;
    };
    /**
     * Gets the _ownerid_value property value. 
     * @returns a string
     */
    public get _ownerid_value() {
        return this.__ownerid_value;
    };
    /**
     * Sets the _ownerid_value property value. 
     * @param value Value to set for the _ownerid_value property.
     */
    public set _ownerid_value(value: string | undefined) {
        this.__ownerid_value = value;
    };
    /**
     * Gets the _owningbusinessunit_value property value. 
     * @returns a string
     */
    public get _owningbusinessunit_value() {
        return this.__owningbusinessunit_value;
    };
    /**
     * Sets the _owningbusinessunit_value property value. 
     * @param value Value to set for the _owningbusinessunit_value property.
     */
    public set _owningbusinessunit_value(value: string | undefined) {
        this.__owningbusinessunit_value = value;
    };
    /**
     * Gets the _owningteam_value property value. 
     * @returns a string
     */
    public get _owningteam_value() {
        return this.__owningteam_value;
    };
    /**
     * Sets the _owningteam_value property value. 
     * @param value Value to set for the _owningteam_value property.
     */
    public set _owningteam_value(value: string | undefined) {
        this.__owningteam_value = value;
    };
    /**
     * Gets the _owninguser_value property value. 
     * @returns a string
     */
    public get _owninguser_value() {
        return this.__owninguser_value;
    };
    /**
     * Sets the _owninguser_value property value. 
     * @param value Value to set for the _owninguser_value property.
     */
    public set _owninguser_value(value: string | undefined) {
        this.__owninguser_value = value;
    };
    /**
     * Instantiates a new msdyn_conversationinsight and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdby property value. 
     * @returns a systemuser
     */
    public get createdby() {
        return this._createdby;
    };
    /**
     * Sets the createdby property value. 
     * @param value Value to set for the createdby property.
     */
    public set createdby(value: Systemuser | undefined) {
        this._createdby = value;
    };
    /**
     * Gets the createdon property value. 
     * @returns a Date
     */
    public get createdon() {
        return this._createdon;
    };
    /**
     * Sets the createdon property value. 
     * @param value Value to set for the createdon property.
     */
    public set createdon(value: Date | undefined) {
        this._createdon = value;
    };
    /**
     * Gets the createdonbehalfby property value. 
     * @returns a systemuser
     */
    public get createdonbehalfby() {
        return this._createdonbehalfby;
    };
    /**
     * Sets the createdonbehalfby property value. 
     * @param value Value to set for the createdonbehalfby property.
     */
    public set createdonbehalfby(value: Systemuser | undefined) {
        this._createdonbehalfby = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_conversationinsight)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_conversationinsight)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_conversationinsight)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_conversationinsight)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_conversationid_value": (o, n) => { (o as unknown as Msdyn_conversationinsight)._msdyn_conversationid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_conversationinsight)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_conversationinsight)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_conversationinsight)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_conversationinsight)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_conversationinsight).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_conversationinsight).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_conversationinsight).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_conversationinsight).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_conversationinsight).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_conversationinsight).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_conversationinsight).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_callaveragepause": (o, n) => { (o as unknown as Msdyn_conversationinsight).msdyn_callaveragepause = n.getNumberValue(); },
            "msdyn_callinsightduration": (o, n) => { (o as unknown as Msdyn_conversationinsight).msdyn_callinsightduration = n.getNumberValue(); },
            "msdyn_calllongestcustomermonologue": (o, n) => { (o as unknown as Msdyn_conversationinsight).msdyn_calllongestcustomermonologue = n.getNumberValue(); },
            "msdyn_callswitchesperconversation": (o, n) => { (o as unknown as Msdyn_conversationinsight).msdyn_callswitchesperconversation = n.getNumberValue(); },
            "msdyn_calltalkingspeed": (o, n) => { (o as unknown as Msdyn_conversationinsight).msdyn_calltalkingspeed = n.getNumberValue(); },
            "msdyn_calltalktolistenratio": (o, n) => { (o as unknown as Msdyn_conversationinsight).msdyn_calltalktolistenratio = n.getNumberValue(); },
            "msdyn_ConversationId": (o, n) => { (o as unknown as Msdyn_conversationinsight).msdyn_ConversationId = n.getObjectValue<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_conversationinsight_AsyncOperations": (o, n) => { (o as unknown as Msdyn_conversationinsight).msdyn_conversationinsight_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_conversationinsight_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_conversationinsight).msdyn_conversationinsight_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_conversationinsight_FileAttachments": (o, n) => { (o as unknown as Msdyn_conversationinsight).msdyn_conversationinsight_FileAttachments = n.getCollectionOfObjectValues<Fileattachment>(createFileattachmentFromDiscriminatorValue); },
            "msdyn_conversationinsight_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_conversationinsight).msdyn_conversationinsight_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_conversationinsight_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_conversationinsight).msdyn_conversationinsight_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_conversationinsight_ProcessSession": (o, n) => { (o as unknown as Msdyn_conversationinsight).msdyn_conversationinsight_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_conversationinsight_SyncErrors": (o, n) => { (o as unknown as Msdyn_conversationinsight).msdyn_conversationinsight_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_conversationinsightid": (o, n) => { (o as unknown as Msdyn_conversationinsight).msdyn_conversationinsightid = n.getStringValue(); },
            "msdyn_insights": (o, n) => { (o as unknown as Msdyn_conversationinsight).msdyn_insights = n.getStringValue(); },
            "msdyn_insights_name": (o, n) => { (o as unknown as Msdyn_conversationinsight).msdyn_insights_name = n.getStringValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_conversationinsight).msdyn_name = n.getStringValue(); },
            "msdyn_transcriptwithinsights": (o, n) => { (o as unknown as Msdyn_conversationinsight).msdyn_transcriptwithinsights = n.getStringValue(); },
            "msdyn_transcriptwithinsights_name": (o, n) => { (o as unknown as Msdyn_conversationinsight).msdyn_transcriptwithinsights_name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_conversationinsight).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_conversationinsight).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_conversationinsight).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_conversationinsight).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_conversationinsight).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_conversationinsight).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_conversationinsight).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_conversationinsight).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_conversationinsight).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_conversationinsight).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the importsequencenumber property value. 
     * @returns a integer
     */
    public get importsequencenumber() {
        return this._importsequencenumber;
    };
    /**
     * Sets the importsequencenumber property value. 
     * @param value Value to set for the importsequencenumber property.
     */
    public set importsequencenumber(value: number | undefined) {
        this._importsequencenumber = value;
    };
    /**
     * Gets the modifiedby property value. 
     * @returns a systemuser
     */
    public get modifiedby() {
        return this._modifiedby;
    };
    /**
     * Sets the modifiedby property value. 
     * @param value Value to set for the modifiedby property.
     */
    public set modifiedby(value: Systemuser | undefined) {
        this._modifiedby = value;
    };
    /**
     * Gets the modifiedon property value. 
     * @returns a Date
     */
    public get modifiedon() {
        return this._modifiedon;
    };
    /**
     * Sets the modifiedon property value. 
     * @param value Value to set for the modifiedon property.
     */
    public set modifiedon(value: Date | undefined) {
        this._modifiedon = value;
    };
    /**
     * Gets the modifiedonbehalfby property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfby() {
        return this._modifiedonbehalfby;
    };
    /**
     * Sets the modifiedonbehalfby property value. 
     * @param value Value to set for the modifiedonbehalfby property.
     */
    public set modifiedonbehalfby(value: Systemuser | undefined) {
        this._modifiedonbehalfby = value;
    };
    /**
     * Gets the msdyn_callaveragepause property value. 
     * @returns a int64
     */
    public get msdyn_callaveragepause() {
        return this._msdyn_callaveragepause;
    };
    /**
     * Sets the msdyn_callaveragepause property value. 
     * @param value Value to set for the msdyn_callaveragepause property.
     */
    public set msdyn_callaveragepause(value: number | undefined) {
        this._msdyn_callaveragepause = value;
    };
    /**
     * Gets the msdyn_callinsightduration property value. 
     * @returns a int64
     */
    public get msdyn_callinsightduration() {
        return this._msdyn_callinsightduration;
    };
    /**
     * Sets the msdyn_callinsightduration property value. 
     * @param value Value to set for the msdyn_callinsightduration property.
     */
    public set msdyn_callinsightduration(value: number | undefined) {
        this._msdyn_callinsightduration = value;
    };
    /**
     * Gets the msdyn_calllongestcustomermonologue property value. 
     * @returns a int64
     */
    public get msdyn_calllongestcustomermonologue() {
        return this._msdyn_calllongestcustomermonologue;
    };
    /**
     * Sets the msdyn_calllongestcustomermonologue property value. 
     * @param value Value to set for the msdyn_calllongestcustomermonologue property.
     */
    public set msdyn_calllongestcustomermonologue(value: number | undefined) {
        this._msdyn_calllongestcustomermonologue = value;
    };
    /**
     * Gets the msdyn_callswitchesperconversation property value. 
     * @returns a int64
     */
    public get msdyn_callswitchesperconversation() {
        return this._msdyn_callswitchesperconversation;
    };
    /**
     * Sets the msdyn_callswitchesperconversation property value. 
     * @param value Value to set for the msdyn_callswitchesperconversation property.
     */
    public set msdyn_callswitchesperconversation(value: number | undefined) {
        this._msdyn_callswitchesperconversation = value;
    };
    /**
     * Gets the msdyn_calltalkingspeed property value. 
     * @returns a int64
     */
    public get msdyn_calltalkingspeed() {
        return this._msdyn_calltalkingspeed;
    };
    /**
     * Sets the msdyn_calltalkingspeed property value. 
     * @param value Value to set for the msdyn_calltalkingspeed property.
     */
    public set msdyn_calltalkingspeed(value: number | undefined) {
        this._msdyn_calltalkingspeed = value;
    };
    /**
     * Gets the msdyn_calltalktolistenratio property value. 
     * @returns a int64
     */
    public get msdyn_calltalktolistenratio() {
        return this._msdyn_calltalktolistenratio;
    };
    /**
     * Sets the msdyn_calltalktolistenratio property value. 
     * @param value Value to set for the msdyn_calltalktolistenratio property.
     */
    public set msdyn_calltalktolistenratio(value: number | undefined) {
        this._msdyn_calltalktolistenratio = value;
    };
    /**
     * Gets the msdyn_ConversationId property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_ConversationId() {
        return this._msdyn_ConversationId;
    };
    /**
     * Sets the msdyn_ConversationId property value. 
     * @param value Value to set for the msdyn_ConversationId property.
     */
    public set msdyn_ConversationId(value: Msdyn_ocliveworkitem | undefined) {
        this._msdyn_ConversationId = value;
    };
    /**
     * Gets the msdyn_conversationinsight_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_conversationinsight_AsyncOperations() {
        return this._msdyn_conversationinsight_AsyncOperations;
    };
    /**
     * Sets the msdyn_conversationinsight_AsyncOperations property value. 
     * @param value Value to set for the msdyn_conversationinsight_AsyncOperations property.
     */
    public set msdyn_conversationinsight_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_conversationinsight_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_conversationinsight_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_conversationinsight_BulkDeleteFailures() {
        return this._msdyn_conversationinsight_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_conversationinsight_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_conversationinsight_BulkDeleteFailures property.
     */
    public set msdyn_conversationinsight_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_conversationinsight_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_conversationinsight_FileAttachments property value. 
     * @returns a fileattachment
     */
    public get msdyn_conversationinsight_FileAttachments() {
        return this._msdyn_conversationinsight_FileAttachments;
    };
    /**
     * Sets the msdyn_conversationinsight_FileAttachments property value. 
     * @param value Value to set for the msdyn_conversationinsight_FileAttachments property.
     */
    public set msdyn_conversationinsight_FileAttachments(value: Fileattachment[] | undefined) {
        this._msdyn_conversationinsight_FileAttachments = value;
    };
    /**
     * Gets the msdyn_conversationinsight_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_conversationinsight_MailboxTrackingFolders() {
        return this._msdyn_conversationinsight_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_conversationinsight_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_conversationinsight_MailboxTrackingFolders property.
     */
    public set msdyn_conversationinsight_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_conversationinsight_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_conversationinsight_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_conversationinsight_PrincipalObjectAttributeAccesses() {
        return this._msdyn_conversationinsight_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_conversationinsight_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_conversationinsight_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_conversationinsight_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_conversationinsight_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_conversationinsight_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_conversationinsight_ProcessSession() {
        return this._msdyn_conversationinsight_ProcessSession;
    };
    /**
     * Sets the msdyn_conversationinsight_ProcessSession property value. 
     * @param value Value to set for the msdyn_conversationinsight_ProcessSession property.
     */
    public set msdyn_conversationinsight_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_conversationinsight_ProcessSession = value;
    };
    /**
     * Gets the msdyn_conversationinsight_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_conversationinsight_SyncErrors() {
        return this._msdyn_conversationinsight_SyncErrors;
    };
    /**
     * Sets the msdyn_conversationinsight_SyncErrors property value. 
     * @param value Value to set for the msdyn_conversationinsight_SyncErrors property.
     */
    public set msdyn_conversationinsight_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_conversationinsight_SyncErrors = value;
    };
    /**
     * Gets the msdyn_conversationinsightid property value. 
     * @returns a string
     */
    public get msdyn_conversationinsightid() {
        return this._msdyn_conversationinsightid;
    };
    /**
     * Sets the msdyn_conversationinsightid property value. 
     * @param value Value to set for the msdyn_conversationinsightid property.
     */
    public set msdyn_conversationinsightid(value: string | undefined) {
        this._msdyn_conversationinsightid = value;
    };
    /**
     * Gets the msdyn_insights property value. 
     * @returns a binary
     */
    public get msdyn_insights() {
        return this._msdyn_insights;
    };
    /**
     * Sets the msdyn_insights property value. 
     * @param value Value to set for the msdyn_insights property.
     */
    public set msdyn_insights(value: string | undefined) {
        this._msdyn_insights = value;
    };
    /**
     * Gets the msdyn_insights_name property value. 
     * @returns a string
     */
    public get msdyn_insights_name() {
        return this._msdyn_insights_name;
    };
    /**
     * Sets the msdyn_insights_name property value. 
     * @param value Value to set for the msdyn_insights_name property.
     */
    public set msdyn_insights_name(value: string | undefined) {
        this._msdyn_insights_name = value;
    };
    /**
     * Gets the msdyn_name property value. 
     * @returns a string
     */
    public get msdyn_name() {
        return this._msdyn_name;
    };
    /**
     * Sets the msdyn_name property value. 
     * @param value Value to set for the msdyn_name property.
     */
    public set msdyn_name(value: string | undefined) {
        this._msdyn_name = value;
    };
    /**
     * Gets the msdyn_transcriptwithinsights property value. 
     * @returns a binary
     */
    public get msdyn_transcriptwithinsights() {
        return this._msdyn_transcriptwithinsights;
    };
    /**
     * Sets the msdyn_transcriptwithinsights property value. 
     * @param value Value to set for the msdyn_transcriptwithinsights property.
     */
    public set msdyn_transcriptwithinsights(value: string | undefined) {
        this._msdyn_transcriptwithinsights = value;
    };
    /**
     * Gets the msdyn_transcriptwithinsights_name property value. 
     * @returns a string
     */
    public get msdyn_transcriptwithinsights_name() {
        return this._msdyn_transcriptwithinsights_name;
    };
    /**
     * Sets the msdyn_transcriptwithinsights_name property value. 
     * @param value Value to set for the msdyn_transcriptwithinsights_name property.
     */
    public set msdyn_transcriptwithinsights_name(value: string | undefined) {
        this._msdyn_transcriptwithinsights_name = value;
    };
    /**
     * Gets the overriddencreatedon property value. 
     * @returns a Date
     */
    public get overriddencreatedon() {
        return this._overriddencreatedon;
    };
    /**
     * Sets the overriddencreatedon property value. 
     * @param value Value to set for the overriddencreatedon property.
     */
    public set overriddencreatedon(value: Date | undefined) {
        this._overriddencreatedon = value;
    };
    /**
     * Gets the ownerid property value. 
     * @returns a principal
     */
    public get ownerid() {
        return this._ownerid;
    };
    /**
     * Sets the ownerid property value. 
     * @param value Value to set for the ownerid property.
     */
    public set ownerid(value: Principal | undefined) {
        this._ownerid = value;
    };
    /**
     * Gets the owningbusinessunit property value. 
     * @returns a businessunit
     */
    public get owningbusinessunit() {
        return this._owningbusinessunit;
    };
    /**
     * Sets the owningbusinessunit property value. 
     * @param value Value to set for the owningbusinessunit property.
     */
    public set owningbusinessunit(value: Businessunit | undefined) {
        this._owningbusinessunit = value;
    };
    /**
     * Gets the owningteam property value. 
     * @returns a team
     */
    public get owningteam() {
        return this._owningteam;
    };
    /**
     * Sets the owningteam property value. 
     * @param value Value to set for the owningteam property.
     */
    public set owningteam(value: Team | undefined) {
        this._owningteam = value;
    };
    /**
     * Gets the owninguser property value. 
     * @returns a systemuser
     */
    public get owninguser() {
        return this._owninguser;
    };
    /**
     * Sets the owninguser property value. 
     * @param value Value to set for the owninguser property.
     */
    public set owninguser(value: Systemuser | undefined) {
        this._owninguser = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_msdyn_conversationid_value", this._msdyn_conversationid_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeNumberValue("msdyn_callaveragepause", this.msdyn_callaveragepause);
        writer.writeNumberValue("msdyn_callinsightduration", this.msdyn_callinsightduration);
        writer.writeNumberValue("msdyn_calllongestcustomermonologue", this.msdyn_calllongestcustomermonologue);
        writer.writeNumberValue("msdyn_callswitchesperconversation", this.msdyn_callswitchesperconversation);
        writer.writeNumberValue("msdyn_calltalkingspeed", this.msdyn_calltalkingspeed);
        writer.writeNumberValue("msdyn_calltalktolistenratio", this.msdyn_calltalktolistenratio);
        writer.writeObjectValue<Msdyn_ocliveworkitem>("msdyn_ConversationId", this.msdyn_ConversationId);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_conversationinsight_AsyncOperations", this.msdyn_conversationinsight_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_conversationinsight_BulkDeleteFailures", this.msdyn_conversationinsight_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Fileattachment>("msdyn_conversationinsight_FileAttachments", this.msdyn_conversationinsight_FileAttachments);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_conversationinsight_MailboxTrackingFolders", this.msdyn_conversationinsight_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_conversationinsight_PrincipalObjectAttributeAccesses", this.msdyn_conversationinsight_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_conversationinsight_ProcessSession", this.msdyn_conversationinsight_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_conversationinsight_SyncErrors", this.msdyn_conversationinsight_SyncErrors);
        writer.writeStringValue("msdyn_conversationinsightid", this.msdyn_conversationinsightid);
        writer.writeStringValue("msdyn_insights", this.msdyn_insights);
        writer.writeStringValue("msdyn_insights_name", this.msdyn_insights_name);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeStringValue("msdyn_transcriptwithinsights", this.msdyn_transcriptwithinsights);
        writer.writeStringValue("msdyn_transcriptwithinsights_name", this.msdyn_transcriptwithinsights_name);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the statecode property value. 
     * @returns a integer
     */
    public get statecode() {
        return this._statecode;
    };
    /**
     * Sets the statecode property value. 
     * @param value Value to set for the statecode property.
     */
    public set statecode(value: number | undefined) {
        this._statecode = value;
    };
    /**
     * Gets the statuscode property value. 
     * @returns a integer
     */
    public get statuscode() {
        return this._statuscode;
    };
    /**
     * Sets the statuscode property value. 
     * @param value Value to set for the statuscode property.
     */
    public set statuscode(value: number | undefined) {
        this._statuscode = value;
    };
    /**
     * Gets the timezoneruleversionnumber property value. 
     * @returns a integer
     */
    public get timezoneruleversionnumber() {
        return this._timezoneruleversionnumber;
    };
    /**
     * Sets the timezoneruleversionnumber property value. 
     * @param value Value to set for the timezoneruleversionnumber property.
     */
    public set timezoneruleversionnumber(value: number | undefined) {
        this._timezoneruleversionnumber = value;
    };
    /**
     * Gets the utcconversiontimezonecode property value. 
     * @returns a integer
     */
    public get utcconversiontimezonecode() {
        return this._utcconversiontimezonecode;
    };
    /**
     * Sets the utcconversiontimezonecode property value. 
     * @param value Value to set for the utcconversiontimezonecode property.
     */
    public set utcconversiontimezonecode(value: number | undefined) {
        this._utcconversiontimezonecode = value;
    };
    /**
     * Gets the versionnumber property value. 
     * @returns a int64
     */
    public get versionnumber() {
        return this._versionnumber;
    };
    /**
     * Sets the versionnumber property value. 
     * @param value Value to set for the versionnumber property.
     */
    public set versionnumber(value: number | undefined) {
        this._versionnumber = value;
    };
}
