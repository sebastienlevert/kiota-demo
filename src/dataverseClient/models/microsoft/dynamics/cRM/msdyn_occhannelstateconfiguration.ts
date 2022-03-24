import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_occhannelconfigurationFromDiscriminatorValue} from './createMsdyn_occhannelconfigurationFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_occhannelconfiguration, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_occhannelstateconfiguration extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_occhannelconfigurationid_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_autocloseliveworkitemafter?: number | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_occhannelconfigurationid?: Msdyn_occhannelconfiguration | undefined;
    private _msdyn_occhannelstateconfiguration_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_occhannelstateconfiguration_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_occhannelstateconfiguration_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_occhannelstateconfiguration_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_occhannelstateconfiguration_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_occhannelstateconfiguration_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_occhannelstateconfiguration_ProcessSession?: Processsession[] | undefined;
    private _msdyn_occhannelstateconfiguration_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_occhannelstateconfigurationid?: string | undefined;
    private _msdyn_ocliveworkitemstate?: number | undefined;
    private _msdyn_showconfirmationonsessionclose?: boolean | undefined;
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
     * Gets the _msdyn_occhannelconfigurationid_value property value. 
     * @returns a string
     */
    public get _msdyn_occhannelconfigurationid_value() {
        return this.__msdyn_occhannelconfigurationid_value;
    };
    /**
     * Sets the _msdyn_occhannelconfigurationid_value property value. 
     * @param value Value to set for the _msdyn_occhannelconfigurationid_value property.
     */
    public set _msdyn_occhannelconfigurationid_value(value: string | undefined) {
        this.__msdyn_occhannelconfigurationid_value = value;
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
     * Instantiates a new msdyn_occhannelstateconfiguration and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_occhannelstateconfiguration)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_occhannelstateconfiguration)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_occhannelstateconfiguration)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_occhannelstateconfiguration)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_occhannelconfigurationid_value": (o, n) => { (o as unknown as Msdyn_occhannelstateconfiguration)._msdyn_occhannelconfigurationid_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_occhannelstateconfiguration)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_occhannelstateconfiguration).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_occhannelstateconfiguration).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_occhannelstateconfiguration).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_occhannelstateconfiguration).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_occhannelstateconfiguration).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_occhannelstateconfiguration).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_occhannelstateconfiguration).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_autocloseliveworkitemafter": (o, n) => { (o as unknown as Msdyn_occhannelstateconfiguration).msdyn_autocloseliveworkitemafter = n.getNumberValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_occhannelstateconfiguration).msdyn_name = n.getStringValue(); },
            "msdyn_occhannelconfigurationid": (o, n) => { (o as unknown as Msdyn_occhannelstateconfiguration).msdyn_occhannelconfigurationid = n.getObjectValue<Msdyn_occhannelconfiguration>(createMsdyn_occhannelconfigurationFromDiscriminatorValue); },
            "msdyn_occhannelstateconfiguration_AsyncOperations": (o, n) => { (o as unknown as Msdyn_occhannelstateconfiguration).msdyn_occhannelstateconfiguration_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_occhannelstateconfiguration_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_occhannelstateconfiguration).msdyn_occhannelstateconfiguration_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_occhannelstateconfiguration_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_occhannelstateconfiguration).msdyn_occhannelstateconfiguration_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_occhannelstateconfiguration_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_occhannelstateconfiguration).msdyn_occhannelstateconfiguration_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_occhannelstateconfiguration_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_occhannelstateconfiguration).msdyn_occhannelstateconfiguration_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_occhannelstateconfiguration_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_occhannelstateconfiguration).msdyn_occhannelstateconfiguration_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_occhannelstateconfiguration_ProcessSession": (o, n) => { (o as unknown as Msdyn_occhannelstateconfiguration).msdyn_occhannelstateconfiguration_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_occhannelstateconfiguration_SyncErrors": (o, n) => { (o as unknown as Msdyn_occhannelstateconfiguration).msdyn_occhannelstateconfiguration_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_occhannelstateconfigurationid": (o, n) => { (o as unknown as Msdyn_occhannelstateconfiguration).msdyn_occhannelstateconfigurationid = n.getStringValue(); },
            "msdyn_ocliveworkitemstate": (o, n) => { (o as unknown as Msdyn_occhannelstateconfiguration).msdyn_ocliveworkitemstate = n.getNumberValue(); },
            "msdyn_showconfirmationonsessionclose": (o, n) => { (o as unknown as Msdyn_occhannelstateconfiguration).msdyn_showconfirmationonsessionclose = n.getBooleanValue(); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_occhannelstateconfiguration).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_occhannelstateconfiguration).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_occhannelstateconfiguration).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_occhannelstateconfiguration).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_occhannelstateconfiguration).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_occhannelstateconfiguration).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_occhannelstateconfiguration).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_autocloseliveworkitemafter property value. 
     * @returns a integer
     */
    public get msdyn_autocloseliveworkitemafter() {
        return this._msdyn_autocloseliveworkitemafter;
    };
    /**
     * Sets the msdyn_autocloseliveworkitemafter property value. 
     * @param value Value to set for the msdyn_autocloseliveworkitemafter property.
     */
    public set msdyn_autocloseliveworkitemafter(value: number | undefined) {
        this._msdyn_autocloseliveworkitemafter = value;
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
     * Gets the msdyn_occhannelconfigurationid property value. 
     * @returns a msdyn_occhannelconfiguration
     */
    public get msdyn_occhannelconfigurationid() {
        return this._msdyn_occhannelconfigurationid;
    };
    /**
     * Sets the msdyn_occhannelconfigurationid property value. 
     * @param value Value to set for the msdyn_occhannelconfigurationid property.
     */
    public set msdyn_occhannelconfigurationid(value: Msdyn_occhannelconfiguration | undefined) {
        this._msdyn_occhannelconfigurationid = value;
    };
    /**
     * Gets the msdyn_occhannelstateconfiguration_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_occhannelstateconfiguration_AsyncOperations() {
        return this._msdyn_occhannelstateconfiguration_AsyncOperations;
    };
    /**
     * Sets the msdyn_occhannelstateconfiguration_AsyncOperations property value. 
     * @param value Value to set for the msdyn_occhannelstateconfiguration_AsyncOperations property.
     */
    public set msdyn_occhannelstateconfiguration_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_occhannelstateconfiguration_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_occhannelstateconfiguration_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_occhannelstateconfiguration_BulkDeleteFailures() {
        return this._msdyn_occhannelstateconfiguration_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_occhannelstateconfiguration_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_occhannelstateconfiguration_BulkDeleteFailures property.
     */
    public set msdyn_occhannelstateconfiguration_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_occhannelstateconfiguration_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_occhannelstateconfiguration_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_occhannelstateconfiguration_DuplicateBaseRecord() {
        return this._msdyn_occhannelstateconfiguration_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_occhannelstateconfiguration_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_occhannelstateconfiguration_DuplicateBaseRecord property.
     */
    public set msdyn_occhannelstateconfiguration_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_occhannelstateconfiguration_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_occhannelstateconfiguration_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_occhannelstateconfiguration_DuplicateMatchingRecord() {
        return this._msdyn_occhannelstateconfiguration_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_occhannelstateconfiguration_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_occhannelstateconfiguration_DuplicateMatchingRecord property.
     */
    public set msdyn_occhannelstateconfiguration_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_occhannelstateconfiguration_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_occhannelstateconfiguration_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_occhannelstateconfiguration_MailboxTrackingFolders() {
        return this._msdyn_occhannelstateconfiguration_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_occhannelstateconfiguration_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_occhannelstateconfiguration_MailboxTrackingFolders property.
     */
    public set msdyn_occhannelstateconfiguration_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_occhannelstateconfiguration_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_occhannelstateconfiguration_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_occhannelstateconfiguration_PrincipalObjectAttributeAccesses() {
        return this._msdyn_occhannelstateconfiguration_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_occhannelstateconfiguration_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_occhannelstateconfiguration_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_occhannelstateconfiguration_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_occhannelstateconfiguration_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_occhannelstateconfiguration_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_occhannelstateconfiguration_ProcessSession() {
        return this._msdyn_occhannelstateconfiguration_ProcessSession;
    };
    /**
     * Sets the msdyn_occhannelstateconfiguration_ProcessSession property value. 
     * @param value Value to set for the msdyn_occhannelstateconfiguration_ProcessSession property.
     */
    public set msdyn_occhannelstateconfiguration_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_occhannelstateconfiguration_ProcessSession = value;
    };
    /**
     * Gets the msdyn_occhannelstateconfiguration_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_occhannelstateconfiguration_SyncErrors() {
        return this._msdyn_occhannelstateconfiguration_SyncErrors;
    };
    /**
     * Sets the msdyn_occhannelstateconfiguration_SyncErrors property value. 
     * @param value Value to set for the msdyn_occhannelstateconfiguration_SyncErrors property.
     */
    public set msdyn_occhannelstateconfiguration_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_occhannelstateconfiguration_SyncErrors = value;
    };
    /**
     * Gets the msdyn_occhannelstateconfigurationid property value. 
     * @returns a string
     */
    public get msdyn_occhannelstateconfigurationid() {
        return this._msdyn_occhannelstateconfigurationid;
    };
    /**
     * Sets the msdyn_occhannelstateconfigurationid property value. 
     * @param value Value to set for the msdyn_occhannelstateconfigurationid property.
     */
    public set msdyn_occhannelstateconfigurationid(value: string | undefined) {
        this._msdyn_occhannelstateconfigurationid = value;
    };
    /**
     * Gets the msdyn_ocliveworkitemstate property value. 
     * @returns a integer
     */
    public get msdyn_ocliveworkitemstate() {
        return this._msdyn_ocliveworkitemstate;
    };
    /**
     * Sets the msdyn_ocliveworkitemstate property value. 
     * @param value Value to set for the msdyn_ocliveworkitemstate property.
     */
    public set msdyn_ocliveworkitemstate(value: number | undefined) {
        this._msdyn_ocliveworkitemstate = value;
    };
    /**
     * Gets the msdyn_showconfirmationonsessionclose property value. 
     * @returns a boolean
     */
    public get msdyn_showconfirmationonsessionclose() {
        return this._msdyn_showconfirmationonsessionclose;
    };
    /**
     * Sets the msdyn_showconfirmationonsessionclose property value. 
     * @param value Value to set for the msdyn_showconfirmationonsessionclose property.
     */
    public set msdyn_showconfirmationonsessionclose(value: boolean | undefined) {
        this._msdyn_showconfirmationonsessionclose = value;
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
        writer.writeStringValue("_msdyn_occhannelconfigurationid_value", this._msdyn_occhannelconfigurationid_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeNumberValue("msdyn_autocloseliveworkitemafter", this.msdyn_autocloseliveworkitemafter);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Msdyn_occhannelconfiguration>("msdyn_occhannelconfigurationid", this.msdyn_occhannelconfigurationid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_occhannelstateconfiguration_AsyncOperations", this.msdyn_occhannelstateconfiguration_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_occhannelstateconfiguration_BulkDeleteFailures", this.msdyn_occhannelstateconfiguration_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_occhannelstateconfiguration_DuplicateBaseRecord", this.msdyn_occhannelstateconfiguration_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_occhannelstateconfiguration_DuplicateMatchingRecord", this.msdyn_occhannelstateconfiguration_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_occhannelstateconfiguration_MailboxTrackingFolders", this.msdyn_occhannelstateconfiguration_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_occhannelstateconfiguration_PrincipalObjectAttributeAccesses", this.msdyn_occhannelstateconfiguration_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_occhannelstateconfiguration_ProcessSession", this.msdyn_occhannelstateconfiguration_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_occhannelstateconfiguration_SyncErrors", this.msdyn_occhannelstateconfiguration_SyncErrors);
        writer.writeStringValue("msdyn_occhannelstateconfigurationid", this.msdyn_occhannelstateconfigurationid);
        writer.writeNumberValue("msdyn_ocliveworkitemstate", this.msdyn_ocliveworkitemstate);
        writer.writeBooleanValue("msdyn_showconfirmationonsessionclose", this.msdyn_showconfirmationonsessionclose);
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
