import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_sentimentanalysis extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_additionallanguagesenabled?: boolean | undefined;
    private _msdyn_agentthreshold?: number | undefined;
    private _msdyn_driversenabled?: boolean | undefined;
    private _msdyn_enabled?: boolean | undefined;
    private _msdyn_enableur?: boolean | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_sentimentanalysis_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_sentimentanalysis_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_sentimentanalysis_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_sentimentanalysis_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_sentimentanalysis_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_sentimentanalysis_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_sentimentanalysis_ProcessSession?: Processsession[] | undefined;
    private _msdyn_sentimentanalysis_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_sentimentanalysisid?: string | undefined;
    private _msdyn_supervisorthreshold?: number | undefined;
    private _msdyn_supervisorthresholdalerttimeoutseconds?: number | undefined;
    private _msdyn_thresholdalertsenabled?: boolean | undefined;
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
     * Instantiates a new msdyn_sentimentanalysis and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_sentimentanalysis)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_sentimentanalysis)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_sentimentanalysis)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_sentimentanalysis)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_sentimentanalysis)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_sentimentanalysis).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_sentimentanalysis).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_sentimentanalysis).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_sentimentanalysis).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_sentimentanalysis).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_sentimentanalysis).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_sentimentanalysis).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_additionallanguagesenabled": (o, n) => { (o as unknown as Msdyn_sentimentanalysis).msdyn_additionallanguagesenabled = n.getBooleanValue(); },
            "msdyn_agentthreshold": (o, n) => { (o as unknown as Msdyn_sentimentanalysis).msdyn_agentthreshold = n.getNumberValue(); },
            "msdyn_driversenabled": (o, n) => { (o as unknown as Msdyn_sentimentanalysis).msdyn_driversenabled = n.getBooleanValue(); },
            "msdyn_enabled": (o, n) => { (o as unknown as Msdyn_sentimentanalysis).msdyn_enabled = n.getBooleanValue(); },
            "msdyn_enableur": (o, n) => { (o as unknown as Msdyn_sentimentanalysis).msdyn_enableur = n.getBooleanValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_sentimentanalysis).msdyn_name = n.getStringValue(); },
            "msdyn_sentimentanalysis_AsyncOperations": (o, n) => { (o as unknown as Msdyn_sentimentanalysis).msdyn_sentimentanalysis_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_sentimentanalysis_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_sentimentanalysis).msdyn_sentimentanalysis_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_sentimentanalysis_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_sentimentanalysis).msdyn_sentimentanalysis_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_sentimentanalysis_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_sentimentanalysis).msdyn_sentimentanalysis_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_sentimentanalysis_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_sentimentanalysis).msdyn_sentimentanalysis_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_sentimentanalysis_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_sentimentanalysis).msdyn_sentimentanalysis_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_sentimentanalysis_ProcessSession": (o, n) => { (o as unknown as Msdyn_sentimentanalysis).msdyn_sentimentanalysis_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_sentimentanalysis_SyncErrors": (o, n) => { (o as unknown as Msdyn_sentimentanalysis).msdyn_sentimentanalysis_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_sentimentanalysisid": (o, n) => { (o as unknown as Msdyn_sentimentanalysis).msdyn_sentimentanalysisid = n.getStringValue(); },
            "msdyn_supervisorthreshold": (o, n) => { (o as unknown as Msdyn_sentimentanalysis).msdyn_supervisorthreshold = n.getNumberValue(); },
            "msdyn_supervisorthresholdalerttimeoutseconds": (o, n) => { (o as unknown as Msdyn_sentimentanalysis).msdyn_supervisorthresholdalerttimeoutseconds = n.getNumberValue(); },
            "msdyn_thresholdalertsenabled": (o, n) => { (o as unknown as Msdyn_sentimentanalysis).msdyn_thresholdalertsenabled = n.getBooleanValue(); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_sentimentanalysis).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_sentimentanalysis).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_sentimentanalysis).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_sentimentanalysis).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_sentimentanalysis).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_sentimentanalysis).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_sentimentanalysis).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_additionallanguagesenabled property value. 
     * @returns a boolean
     */
    public get msdyn_additionallanguagesenabled() {
        return this._msdyn_additionallanguagesenabled;
    };
    /**
     * Sets the msdyn_additionallanguagesenabled property value. 
     * @param value Value to set for the msdyn_additionallanguagesenabled property.
     */
    public set msdyn_additionallanguagesenabled(value: boolean | undefined) {
        this._msdyn_additionallanguagesenabled = value;
    };
    /**
     * Gets the msdyn_agentthreshold property value. 
     * @returns a integer
     */
    public get msdyn_agentthreshold() {
        return this._msdyn_agentthreshold;
    };
    /**
     * Sets the msdyn_agentthreshold property value. 
     * @param value Value to set for the msdyn_agentthreshold property.
     */
    public set msdyn_agentthreshold(value: number | undefined) {
        this._msdyn_agentthreshold = value;
    };
    /**
     * Gets the msdyn_driversenabled property value. 
     * @returns a boolean
     */
    public get msdyn_driversenabled() {
        return this._msdyn_driversenabled;
    };
    /**
     * Sets the msdyn_driversenabled property value. 
     * @param value Value to set for the msdyn_driversenabled property.
     */
    public set msdyn_driversenabled(value: boolean | undefined) {
        this._msdyn_driversenabled = value;
    };
    /**
     * Gets the msdyn_enabled property value. 
     * @returns a boolean
     */
    public get msdyn_enabled() {
        return this._msdyn_enabled;
    };
    /**
     * Sets the msdyn_enabled property value. 
     * @param value Value to set for the msdyn_enabled property.
     */
    public set msdyn_enabled(value: boolean | undefined) {
        this._msdyn_enabled = value;
    };
    /**
     * Gets the msdyn_enableur property value. 
     * @returns a boolean
     */
    public get msdyn_enableur() {
        return this._msdyn_enableur;
    };
    /**
     * Sets the msdyn_enableur property value. 
     * @param value Value to set for the msdyn_enableur property.
     */
    public set msdyn_enableur(value: boolean | undefined) {
        this._msdyn_enableur = value;
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
     * Gets the msdyn_sentimentanalysis_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_sentimentanalysis_AsyncOperations() {
        return this._msdyn_sentimentanalysis_AsyncOperations;
    };
    /**
     * Sets the msdyn_sentimentanalysis_AsyncOperations property value. 
     * @param value Value to set for the msdyn_sentimentanalysis_AsyncOperations property.
     */
    public set msdyn_sentimentanalysis_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_sentimentanalysis_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_sentimentanalysis_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_sentimentanalysis_BulkDeleteFailures() {
        return this._msdyn_sentimentanalysis_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_sentimentanalysis_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_sentimentanalysis_BulkDeleteFailures property.
     */
    public set msdyn_sentimentanalysis_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_sentimentanalysis_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_sentimentanalysis_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_sentimentanalysis_DuplicateBaseRecord() {
        return this._msdyn_sentimentanalysis_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_sentimentanalysis_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_sentimentanalysis_DuplicateBaseRecord property.
     */
    public set msdyn_sentimentanalysis_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_sentimentanalysis_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_sentimentanalysis_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_sentimentanalysis_DuplicateMatchingRecord() {
        return this._msdyn_sentimentanalysis_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_sentimentanalysis_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_sentimentanalysis_DuplicateMatchingRecord property.
     */
    public set msdyn_sentimentanalysis_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_sentimentanalysis_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_sentimentanalysis_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_sentimentanalysis_MailboxTrackingFolders() {
        return this._msdyn_sentimentanalysis_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_sentimentanalysis_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_sentimentanalysis_MailboxTrackingFolders property.
     */
    public set msdyn_sentimentanalysis_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_sentimentanalysis_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_sentimentanalysis_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_sentimentanalysis_PrincipalObjectAttributeAccesses() {
        return this._msdyn_sentimentanalysis_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_sentimentanalysis_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_sentimentanalysis_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_sentimentanalysis_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_sentimentanalysis_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_sentimentanalysis_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_sentimentanalysis_ProcessSession() {
        return this._msdyn_sentimentanalysis_ProcessSession;
    };
    /**
     * Sets the msdyn_sentimentanalysis_ProcessSession property value. 
     * @param value Value to set for the msdyn_sentimentanalysis_ProcessSession property.
     */
    public set msdyn_sentimentanalysis_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_sentimentanalysis_ProcessSession = value;
    };
    /**
     * Gets the msdyn_sentimentanalysis_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_sentimentanalysis_SyncErrors() {
        return this._msdyn_sentimentanalysis_SyncErrors;
    };
    /**
     * Sets the msdyn_sentimentanalysis_SyncErrors property value. 
     * @param value Value to set for the msdyn_sentimentanalysis_SyncErrors property.
     */
    public set msdyn_sentimentanalysis_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_sentimentanalysis_SyncErrors = value;
    };
    /**
     * Gets the msdyn_sentimentanalysisid property value. 
     * @returns a string
     */
    public get msdyn_sentimentanalysisid() {
        return this._msdyn_sentimentanalysisid;
    };
    /**
     * Sets the msdyn_sentimentanalysisid property value. 
     * @param value Value to set for the msdyn_sentimentanalysisid property.
     */
    public set msdyn_sentimentanalysisid(value: string | undefined) {
        this._msdyn_sentimentanalysisid = value;
    };
    /**
     * Gets the msdyn_supervisorthreshold property value. 
     * @returns a integer
     */
    public get msdyn_supervisorthreshold() {
        return this._msdyn_supervisorthreshold;
    };
    /**
     * Sets the msdyn_supervisorthreshold property value. 
     * @param value Value to set for the msdyn_supervisorthreshold property.
     */
    public set msdyn_supervisorthreshold(value: number | undefined) {
        this._msdyn_supervisorthreshold = value;
    };
    /**
     * Gets the msdyn_supervisorthresholdalerttimeoutseconds property value. 
     * @returns a integer
     */
    public get msdyn_supervisorthresholdalerttimeoutseconds() {
        return this._msdyn_supervisorthresholdalerttimeoutseconds;
    };
    /**
     * Sets the msdyn_supervisorthresholdalerttimeoutseconds property value. 
     * @param value Value to set for the msdyn_supervisorthresholdalerttimeoutseconds property.
     */
    public set msdyn_supervisorthresholdalerttimeoutseconds(value: number | undefined) {
        this._msdyn_supervisorthresholdalerttimeoutseconds = value;
    };
    /**
     * Gets the msdyn_thresholdalertsenabled property value. 
     * @returns a boolean
     */
    public get msdyn_thresholdalertsenabled() {
        return this._msdyn_thresholdalertsenabled;
    };
    /**
     * Sets the msdyn_thresholdalertsenabled property value. 
     * @param value Value to set for the msdyn_thresholdalertsenabled property.
     */
    public set msdyn_thresholdalertsenabled(value: boolean | undefined) {
        this._msdyn_thresholdalertsenabled = value;
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
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeBooleanValue("msdyn_additionallanguagesenabled", this.msdyn_additionallanguagesenabled);
        writer.writeNumberValue("msdyn_agentthreshold", this.msdyn_agentthreshold);
        writer.writeBooleanValue("msdyn_driversenabled", this.msdyn_driversenabled);
        writer.writeBooleanValue("msdyn_enabled", this.msdyn_enabled);
        writer.writeBooleanValue("msdyn_enableur", this.msdyn_enableur);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_sentimentanalysis_AsyncOperations", this.msdyn_sentimentanalysis_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_sentimentanalysis_BulkDeleteFailures", this.msdyn_sentimentanalysis_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_sentimentanalysis_DuplicateBaseRecord", this.msdyn_sentimentanalysis_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_sentimentanalysis_DuplicateMatchingRecord", this.msdyn_sentimentanalysis_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_sentimentanalysis_MailboxTrackingFolders", this.msdyn_sentimentanalysis_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_sentimentanalysis_PrincipalObjectAttributeAccesses", this.msdyn_sentimentanalysis_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_sentimentanalysis_ProcessSession", this.msdyn_sentimentanalysis_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_sentimentanalysis_SyncErrors", this.msdyn_sentimentanalysis_SyncErrors);
        writer.writeStringValue("msdyn_sentimentanalysisid", this.msdyn_sentimentanalysisid);
        writer.writeNumberValue("msdyn_supervisorthreshold", this.msdyn_supervisorthreshold);
        writer.writeNumberValue("msdyn_supervisorthresholdalerttimeoutseconds", this.msdyn_supervisorthresholdalerttimeoutseconds);
        writer.writeBooleanValue("msdyn_thresholdalertsenabled", this.msdyn_thresholdalertsenabled);
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
