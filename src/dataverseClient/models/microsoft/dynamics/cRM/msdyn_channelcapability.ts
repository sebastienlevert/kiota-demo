import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_conversationactionFromDiscriminatorValue} from './createMsdyn_conversationactionFromDiscriminatorValue';
import {createMsdyn_providerFromDiscriminatorValue} from './createMsdyn_providerFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_conversationaction, Msdyn_provider, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_channelcapability extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_conversationaction_value?: string | undefined;
    private __msdyn_provider_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_channelcapability_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_channelcapability_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_channelcapability_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_channelcapability_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_channelcapability_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_channelcapability_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_channelcapability_ProcessSession?: Processsession[] | undefined;
    private _msdyn_channelcapability_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_channelcapabilityid?: string | undefined;
    private _msdyn_ConversationAction?: Msdyn_conversationaction | undefined;
    private _msdyn_escalationchannelmode?: number | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_Provider?: Msdyn_provider | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
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
     * Gets the _msdyn_conversationaction_value property value. 
     * @returns a string
     */
    public get _msdyn_conversationaction_value() {
        return this.__msdyn_conversationaction_value;
    };
    /**
     * Sets the _msdyn_conversationaction_value property value. 
     * @param value Value to set for the _msdyn_conversationaction_value property.
     */
    public set _msdyn_conversationaction_value(value: string | undefined) {
        this.__msdyn_conversationaction_value = value;
    };
    /**
     * Gets the _msdyn_provider_value property value. 
     * @returns a string
     */
    public get _msdyn_provider_value() {
        return this.__msdyn_provider_value;
    };
    /**
     * Sets the _msdyn_provider_value property value. 
     * @param value Value to set for the _msdyn_provider_value property.
     */
    public set _msdyn_provider_value(value: string | undefined) {
        this.__msdyn_provider_value = value;
    };
    /**
     * Gets the _organizationid_value property value. 
     * @returns a string
     */
    public get _organizationid_value() {
        return this.__organizationid_value;
    };
    /**
     * Sets the _organizationid_value property value. 
     * @param value Value to set for the _organizationid_value property.
     */
    public set _organizationid_value(value: string | undefined) {
        this.__organizationid_value = value;
    };
    /**
     * Instantiates a new msdyn_channelcapability and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_channelcapability)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_channelcapability)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_channelcapability)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_channelcapability)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_conversationaction_value": (o, n) => { (o as unknown as Msdyn_channelcapability)._msdyn_conversationaction_value = n.getStringValue(); },
            "_msdyn_provider_value": (o, n) => { (o as unknown as Msdyn_channelcapability)._msdyn_provider_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_channelcapability)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_channelcapability).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_channelcapability).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_channelcapability).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_channelcapability).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_channelcapability).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_channelcapability).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_channelcapability).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_channelcapability_AsyncOperations": (o, n) => { (o as unknown as Msdyn_channelcapability).msdyn_channelcapability_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_channelcapability_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_channelcapability).msdyn_channelcapability_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_channelcapability_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_channelcapability).msdyn_channelcapability_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_channelcapability_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_channelcapability).msdyn_channelcapability_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_channelcapability_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_channelcapability).msdyn_channelcapability_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_channelcapability_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_channelcapability).msdyn_channelcapability_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_channelcapability_ProcessSession": (o, n) => { (o as unknown as Msdyn_channelcapability).msdyn_channelcapability_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_channelcapability_SyncErrors": (o, n) => { (o as unknown as Msdyn_channelcapability).msdyn_channelcapability_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_channelcapabilityid": (o, n) => { (o as unknown as Msdyn_channelcapability).msdyn_channelcapabilityid = n.getStringValue(); },
            "msdyn_ConversationAction": (o, n) => { (o as unknown as Msdyn_channelcapability).msdyn_ConversationAction = n.getObjectValue<Msdyn_conversationaction>(createMsdyn_conversationactionFromDiscriminatorValue); },
            "msdyn_escalationchannelmode": (o, n) => { (o as unknown as Msdyn_channelcapability).msdyn_escalationchannelmode = n.getNumberValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_channelcapability).msdyn_name = n.getStringValue(); },
            "msdyn_Provider": (o, n) => { (o as unknown as Msdyn_channelcapability).msdyn_Provider = n.getObjectValue<Msdyn_provider>(createMsdyn_providerFromDiscriminatorValue); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_channelcapability).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_channelcapability).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_channelcapability).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_channelcapability).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_channelcapability).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_channelcapability).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_channelcapability).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_channelcapability_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_channelcapability_AsyncOperations() {
        return this._msdyn_channelcapability_AsyncOperations;
    };
    /**
     * Sets the msdyn_channelcapability_AsyncOperations property value. 
     * @param value Value to set for the msdyn_channelcapability_AsyncOperations property.
     */
    public set msdyn_channelcapability_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_channelcapability_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_channelcapability_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_channelcapability_BulkDeleteFailures() {
        return this._msdyn_channelcapability_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_channelcapability_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_channelcapability_BulkDeleteFailures property.
     */
    public set msdyn_channelcapability_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_channelcapability_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_channelcapability_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_channelcapability_DuplicateBaseRecord() {
        return this._msdyn_channelcapability_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_channelcapability_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_channelcapability_DuplicateBaseRecord property.
     */
    public set msdyn_channelcapability_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_channelcapability_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_channelcapability_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_channelcapability_DuplicateMatchingRecord() {
        return this._msdyn_channelcapability_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_channelcapability_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_channelcapability_DuplicateMatchingRecord property.
     */
    public set msdyn_channelcapability_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_channelcapability_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_channelcapability_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_channelcapability_MailboxTrackingFolders() {
        return this._msdyn_channelcapability_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_channelcapability_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_channelcapability_MailboxTrackingFolders property.
     */
    public set msdyn_channelcapability_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_channelcapability_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_channelcapability_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_channelcapability_PrincipalObjectAttributeAccesses() {
        return this._msdyn_channelcapability_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_channelcapability_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_channelcapability_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_channelcapability_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_channelcapability_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_channelcapability_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_channelcapability_ProcessSession() {
        return this._msdyn_channelcapability_ProcessSession;
    };
    /**
     * Sets the msdyn_channelcapability_ProcessSession property value. 
     * @param value Value to set for the msdyn_channelcapability_ProcessSession property.
     */
    public set msdyn_channelcapability_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_channelcapability_ProcessSession = value;
    };
    /**
     * Gets the msdyn_channelcapability_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_channelcapability_SyncErrors() {
        return this._msdyn_channelcapability_SyncErrors;
    };
    /**
     * Sets the msdyn_channelcapability_SyncErrors property value. 
     * @param value Value to set for the msdyn_channelcapability_SyncErrors property.
     */
    public set msdyn_channelcapability_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_channelcapability_SyncErrors = value;
    };
    /**
     * Gets the msdyn_channelcapabilityid property value. 
     * @returns a string
     */
    public get msdyn_channelcapabilityid() {
        return this._msdyn_channelcapabilityid;
    };
    /**
     * Sets the msdyn_channelcapabilityid property value. 
     * @param value Value to set for the msdyn_channelcapabilityid property.
     */
    public set msdyn_channelcapabilityid(value: string | undefined) {
        this._msdyn_channelcapabilityid = value;
    };
    /**
     * Gets the msdyn_ConversationAction property value. 
     * @returns a msdyn_conversationaction
     */
    public get msdyn_ConversationAction() {
        return this._msdyn_ConversationAction;
    };
    /**
     * Sets the msdyn_ConversationAction property value. 
     * @param value Value to set for the msdyn_ConversationAction property.
     */
    public set msdyn_ConversationAction(value: Msdyn_conversationaction | undefined) {
        this._msdyn_ConversationAction = value;
    };
    /**
     * Gets the msdyn_escalationchannelmode property value. 
     * @returns a integer
     */
    public get msdyn_escalationchannelmode() {
        return this._msdyn_escalationchannelmode;
    };
    /**
     * Sets the msdyn_escalationchannelmode property value. 
     * @param value Value to set for the msdyn_escalationchannelmode property.
     */
    public set msdyn_escalationchannelmode(value: number | undefined) {
        this._msdyn_escalationchannelmode = value;
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
     * Gets the msdyn_Provider property value. 
     * @returns a msdyn_provider
     */
    public get msdyn_Provider() {
        return this._msdyn_Provider;
    };
    /**
     * Sets the msdyn_Provider property value. 
     * @param value Value to set for the msdyn_Provider property.
     */
    public set msdyn_Provider(value: Msdyn_provider | undefined) {
        this._msdyn_Provider = value;
    };
    /**
     * Gets the organizationid property value. 
     * @returns a organization
     */
    public get organizationid() {
        return this._organizationid;
    };
    /**
     * Sets the organizationid property value. 
     * @param value Value to set for the organizationid property.
     */
    public set organizationid(value: Organization | undefined) {
        this._organizationid = value;
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
        writer.writeStringValue("_msdyn_conversationaction_value", this._msdyn_conversationaction_value);
        writer.writeStringValue("_msdyn_provider_value", this._msdyn_provider_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_channelcapability_AsyncOperations", this.msdyn_channelcapability_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_channelcapability_BulkDeleteFailures", this.msdyn_channelcapability_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_channelcapability_DuplicateBaseRecord", this.msdyn_channelcapability_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_channelcapability_DuplicateMatchingRecord", this.msdyn_channelcapability_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_channelcapability_MailboxTrackingFolders", this.msdyn_channelcapability_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_channelcapability_PrincipalObjectAttributeAccesses", this.msdyn_channelcapability_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_channelcapability_ProcessSession", this.msdyn_channelcapability_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_channelcapability_SyncErrors", this.msdyn_channelcapability_SyncErrors);
        writer.writeStringValue("msdyn_channelcapabilityid", this.msdyn_channelcapabilityid);
        writer.writeObjectValue<Msdyn_conversationaction>("msdyn_ConversationAction", this.msdyn_ConversationAction);
        writer.writeNumberValue("msdyn_escalationchannelmode", this.msdyn_escalationchannelmode);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Msdyn_provider>("msdyn_Provider", this.msdyn_Provider);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
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
