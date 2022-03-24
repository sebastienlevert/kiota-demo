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

export class Msdyn_geolocationsettings extends Crmbaseentity implements Parsable {
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
    private _msdyn_beaconconfiguration?: string | undefined;
    private _msdyn_enablelocationtracking?: boolean | undefined;
    private _msdyn_fridayendtime?: Date | undefined;
    private _msdyn_fridaystarttime?: Date | undefined;
    private _msdyn_geolocationsettings_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_geolocationsettings_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_geolocationsettings_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_geolocationsettings_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_geolocationsettings_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_geolocationsettings_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_geolocationsettings_ProcessSession?: Processsession[] | undefined;
    private _msdyn_geolocationsettings_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_geolocationsettingsid?: string | undefined;
    private _msdyn_mondayendtime?: Date | undefined;
    private _msdyn_mondaystarttime?: Date | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_refreshintervalseconds?: number | undefined;
    private _msdyn_saturdayendtime?: Date | undefined;
    private _msdyn_saturdaystarttime?: Date | undefined;
    private _msdyn_sundayendtime?: Date | undefined;
    private _msdyn_sundaystarttime?: Date | undefined;
    private _msdyn_thursdayendtime?: Date | undefined;
    private _msdyn_thursdaystarttime?: Date | undefined;
    private _msdyn_tuesdayendtime?: Date | undefined;
    private _msdyn_tuesdaystarttime?: Date | undefined;
    private _msdyn_wednesdayendtime?: Date | undefined;
    private _msdyn_wednesdaystarttime?: Date | undefined;
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
     * Instantiates a new msdyn_geolocationsettings and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_geolocationsettings)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_geolocationsettings)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_geolocationsettings)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_geolocationsettings)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_geolocationsettings)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_geolocationsettings).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_geolocationsettings).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_geolocationsettings).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_geolocationsettings).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_geolocationsettings).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_geolocationsettings).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_geolocationsettings).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_beaconconfiguration": (o, n) => { (o as unknown as Msdyn_geolocationsettings).msdyn_beaconconfiguration = n.getStringValue(); },
            "msdyn_enablelocationtracking": (o, n) => { (o as unknown as Msdyn_geolocationsettings).msdyn_enablelocationtracking = n.getBooleanValue(); },
            "msdyn_fridayendtime": (o, n) => { (o as unknown as Msdyn_geolocationsettings).msdyn_fridayendtime = n.getDateValue(); },
            "msdyn_fridaystarttime": (o, n) => { (o as unknown as Msdyn_geolocationsettings).msdyn_fridaystarttime = n.getDateValue(); },
            "msdyn_geolocationsettings_AsyncOperations": (o, n) => { (o as unknown as Msdyn_geolocationsettings).msdyn_geolocationsettings_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_geolocationsettings_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_geolocationsettings).msdyn_geolocationsettings_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_geolocationsettings_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_geolocationsettings).msdyn_geolocationsettings_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_geolocationsettings_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_geolocationsettings).msdyn_geolocationsettings_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_geolocationsettings_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_geolocationsettings).msdyn_geolocationsettings_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_geolocationsettings_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_geolocationsettings).msdyn_geolocationsettings_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_geolocationsettings_ProcessSession": (o, n) => { (o as unknown as Msdyn_geolocationsettings).msdyn_geolocationsettings_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_geolocationsettings_SyncErrors": (o, n) => { (o as unknown as Msdyn_geolocationsettings).msdyn_geolocationsettings_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_geolocationsettingsid": (o, n) => { (o as unknown as Msdyn_geolocationsettings).msdyn_geolocationsettingsid = n.getStringValue(); },
            "msdyn_mondayendtime": (o, n) => { (o as unknown as Msdyn_geolocationsettings).msdyn_mondayendtime = n.getDateValue(); },
            "msdyn_mondaystarttime": (o, n) => { (o as unknown as Msdyn_geolocationsettings).msdyn_mondaystarttime = n.getDateValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_geolocationsettings).msdyn_name = n.getStringValue(); },
            "msdyn_refreshintervalseconds": (o, n) => { (o as unknown as Msdyn_geolocationsettings).msdyn_refreshintervalseconds = n.getNumberValue(); },
            "msdyn_saturdayendtime": (o, n) => { (o as unknown as Msdyn_geolocationsettings).msdyn_saturdayendtime = n.getDateValue(); },
            "msdyn_saturdaystarttime": (o, n) => { (o as unknown as Msdyn_geolocationsettings).msdyn_saturdaystarttime = n.getDateValue(); },
            "msdyn_sundayendtime": (o, n) => { (o as unknown as Msdyn_geolocationsettings).msdyn_sundayendtime = n.getDateValue(); },
            "msdyn_sundaystarttime": (o, n) => { (o as unknown as Msdyn_geolocationsettings).msdyn_sundaystarttime = n.getDateValue(); },
            "msdyn_thursdayendtime": (o, n) => { (o as unknown as Msdyn_geolocationsettings).msdyn_thursdayendtime = n.getDateValue(); },
            "msdyn_thursdaystarttime": (o, n) => { (o as unknown as Msdyn_geolocationsettings).msdyn_thursdaystarttime = n.getDateValue(); },
            "msdyn_tuesdayendtime": (o, n) => { (o as unknown as Msdyn_geolocationsettings).msdyn_tuesdayendtime = n.getDateValue(); },
            "msdyn_tuesdaystarttime": (o, n) => { (o as unknown as Msdyn_geolocationsettings).msdyn_tuesdaystarttime = n.getDateValue(); },
            "msdyn_wednesdayendtime": (o, n) => { (o as unknown as Msdyn_geolocationsettings).msdyn_wednesdayendtime = n.getDateValue(); },
            "msdyn_wednesdaystarttime": (o, n) => { (o as unknown as Msdyn_geolocationsettings).msdyn_wednesdaystarttime = n.getDateValue(); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_geolocationsettings).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_geolocationsettings).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_geolocationsettings).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_geolocationsettings).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_geolocationsettings).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_geolocationsettings).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_geolocationsettings).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_beaconconfiguration property value. 
     * @returns a string
     */
    public get msdyn_beaconconfiguration() {
        return this._msdyn_beaconconfiguration;
    };
    /**
     * Sets the msdyn_beaconconfiguration property value. 
     * @param value Value to set for the msdyn_beaconconfiguration property.
     */
    public set msdyn_beaconconfiguration(value: string | undefined) {
        this._msdyn_beaconconfiguration = value;
    };
    /**
     * Gets the msdyn_enablelocationtracking property value. 
     * @returns a boolean
     */
    public get msdyn_enablelocationtracking() {
        return this._msdyn_enablelocationtracking;
    };
    /**
     * Sets the msdyn_enablelocationtracking property value. 
     * @param value Value to set for the msdyn_enablelocationtracking property.
     */
    public set msdyn_enablelocationtracking(value: boolean | undefined) {
        this._msdyn_enablelocationtracking = value;
    };
    /**
     * Gets the msdyn_fridayendtime property value. 
     * @returns a Date
     */
    public get msdyn_fridayendtime() {
        return this._msdyn_fridayendtime;
    };
    /**
     * Sets the msdyn_fridayendtime property value. 
     * @param value Value to set for the msdyn_fridayendtime property.
     */
    public set msdyn_fridayendtime(value: Date | undefined) {
        this._msdyn_fridayendtime = value;
    };
    /**
     * Gets the msdyn_fridaystarttime property value. 
     * @returns a Date
     */
    public get msdyn_fridaystarttime() {
        return this._msdyn_fridaystarttime;
    };
    /**
     * Sets the msdyn_fridaystarttime property value. 
     * @param value Value to set for the msdyn_fridaystarttime property.
     */
    public set msdyn_fridaystarttime(value: Date | undefined) {
        this._msdyn_fridaystarttime = value;
    };
    /**
     * Gets the msdyn_geolocationsettings_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_geolocationsettings_AsyncOperations() {
        return this._msdyn_geolocationsettings_AsyncOperations;
    };
    /**
     * Sets the msdyn_geolocationsettings_AsyncOperations property value. 
     * @param value Value to set for the msdyn_geolocationsettings_AsyncOperations property.
     */
    public set msdyn_geolocationsettings_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_geolocationsettings_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_geolocationsettings_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_geolocationsettings_BulkDeleteFailures() {
        return this._msdyn_geolocationsettings_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_geolocationsettings_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_geolocationsettings_BulkDeleteFailures property.
     */
    public set msdyn_geolocationsettings_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_geolocationsettings_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_geolocationsettings_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_geolocationsettings_DuplicateBaseRecord() {
        return this._msdyn_geolocationsettings_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_geolocationsettings_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_geolocationsettings_DuplicateBaseRecord property.
     */
    public set msdyn_geolocationsettings_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_geolocationsettings_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_geolocationsettings_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_geolocationsettings_DuplicateMatchingRecord() {
        return this._msdyn_geolocationsettings_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_geolocationsettings_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_geolocationsettings_DuplicateMatchingRecord property.
     */
    public set msdyn_geolocationsettings_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_geolocationsettings_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_geolocationsettings_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_geolocationsettings_MailboxTrackingFolders() {
        return this._msdyn_geolocationsettings_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_geolocationsettings_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_geolocationsettings_MailboxTrackingFolders property.
     */
    public set msdyn_geolocationsettings_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_geolocationsettings_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_geolocationsettings_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_geolocationsettings_PrincipalObjectAttributeAccesses() {
        return this._msdyn_geolocationsettings_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_geolocationsettings_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_geolocationsettings_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_geolocationsettings_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_geolocationsettings_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_geolocationsettings_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_geolocationsettings_ProcessSession() {
        return this._msdyn_geolocationsettings_ProcessSession;
    };
    /**
     * Sets the msdyn_geolocationsettings_ProcessSession property value. 
     * @param value Value to set for the msdyn_geolocationsettings_ProcessSession property.
     */
    public set msdyn_geolocationsettings_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_geolocationsettings_ProcessSession = value;
    };
    /**
     * Gets the msdyn_geolocationsettings_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_geolocationsettings_SyncErrors() {
        return this._msdyn_geolocationsettings_SyncErrors;
    };
    /**
     * Sets the msdyn_geolocationsettings_SyncErrors property value. 
     * @param value Value to set for the msdyn_geolocationsettings_SyncErrors property.
     */
    public set msdyn_geolocationsettings_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_geolocationsettings_SyncErrors = value;
    };
    /**
     * Gets the msdyn_geolocationsettingsid property value. 
     * @returns a string
     */
    public get msdyn_geolocationsettingsid() {
        return this._msdyn_geolocationsettingsid;
    };
    /**
     * Sets the msdyn_geolocationsettingsid property value. 
     * @param value Value to set for the msdyn_geolocationsettingsid property.
     */
    public set msdyn_geolocationsettingsid(value: string | undefined) {
        this._msdyn_geolocationsettingsid = value;
    };
    /**
     * Gets the msdyn_mondayendtime property value. 
     * @returns a Date
     */
    public get msdyn_mondayendtime() {
        return this._msdyn_mondayendtime;
    };
    /**
     * Sets the msdyn_mondayendtime property value. 
     * @param value Value to set for the msdyn_mondayendtime property.
     */
    public set msdyn_mondayendtime(value: Date | undefined) {
        this._msdyn_mondayendtime = value;
    };
    /**
     * Gets the msdyn_mondaystarttime property value. 
     * @returns a Date
     */
    public get msdyn_mondaystarttime() {
        return this._msdyn_mondaystarttime;
    };
    /**
     * Sets the msdyn_mondaystarttime property value. 
     * @param value Value to set for the msdyn_mondaystarttime property.
     */
    public set msdyn_mondaystarttime(value: Date | undefined) {
        this._msdyn_mondaystarttime = value;
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
     * Gets the msdyn_refreshintervalseconds property value. 
     * @returns a integer
     */
    public get msdyn_refreshintervalseconds() {
        return this._msdyn_refreshintervalseconds;
    };
    /**
     * Sets the msdyn_refreshintervalseconds property value. 
     * @param value Value to set for the msdyn_refreshintervalseconds property.
     */
    public set msdyn_refreshintervalseconds(value: number | undefined) {
        this._msdyn_refreshintervalseconds = value;
    };
    /**
     * Gets the msdyn_saturdayendtime property value. 
     * @returns a Date
     */
    public get msdyn_saturdayendtime() {
        return this._msdyn_saturdayendtime;
    };
    /**
     * Sets the msdyn_saturdayendtime property value. 
     * @param value Value to set for the msdyn_saturdayendtime property.
     */
    public set msdyn_saturdayendtime(value: Date | undefined) {
        this._msdyn_saturdayendtime = value;
    };
    /**
     * Gets the msdyn_saturdaystarttime property value. 
     * @returns a Date
     */
    public get msdyn_saturdaystarttime() {
        return this._msdyn_saturdaystarttime;
    };
    /**
     * Sets the msdyn_saturdaystarttime property value. 
     * @param value Value to set for the msdyn_saturdaystarttime property.
     */
    public set msdyn_saturdaystarttime(value: Date | undefined) {
        this._msdyn_saturdaystarttime = value;
    };
    /**
     * Gets the msdyn_sundayendtime property value. 
     * @returns a Date
     */
    public get msdyn_sundayendtime() {
        return this._msdyn_sundayendtime;
    };
    /**
     * Sets the msdyn_sundayendtime property value. 
     * @param value Value to set for the msdyn_sundayendtime property.
     */
    public set msdyn_sundayendtime(value: Date | undefined) {
        this._msdyn_sundayendtime = value;
    };
    /**
     * Gets the msdyn_sundaystarttime property value. 
     * @returns a Date
     */
    public get msdyn_sundaystarttime() {
        return this._msdyn_sundaystarttime;
    };
    /**
     * Sets the msdyn_sundaystarttime property value. 
     * @param value Value to set for the msdyn_sundaystarttime property.
     */
    public set msdyn_sundaystarttime(value: Date | undefined) {
        this._msdyn_sundaystarttime = value;
    };
    /**
     * Gets the msdyn_thursdayendtime property value. 
     * @returns a Date
     */
    public get msdyn_thursdayendtime() {
        return this._msdyn_thursdayendtime;
    };
    /**
     * Sets the msdyn_thursdayendtime property value. 
     * @param value Value to set for the msdyn_thursdayendtime property.
     */
    public set msdyn_thursdayendtime(value: Date | undefined) {
        this._msdyn_thursdayendtime = value;
    };
    /**
     * Gets the msdyn_thursdaystarttime property value. 
     * @returns a Date
     */
    public get msdyn_thursdaystarttime() {
        return this._msdyn_thursdaystarttime;
    };
    /**
     * Sets the msdyn_thursdaystarttime property value. 
     * @param value Value to set for the msdyn_thursdaystarttime property.
     */
    public set msdyn_thursdaystarttime(value: Date | undefined) {
        this._msdyn_thursdaystarttime = value;
    };
    /**
     * Gets the msdyn_tuesdayendtime property value. 
     * @returns a Date
     */
    public get msdyn_tuesdayendtime() {
        return this._msdyn_tuesdayendtime;
    };
    /**
     * Sets the msdyn_tuesdayendtime property value. 
     * @param value Value to set for the msdyn_tuesdayendtime property.
     */
    public set msdyn_tuesdayendtime(value: Date | undefined) {
        this._msdyn_tuesdayendtime = value;
    };
    /**
     * Gets the msdyn_tuesdaystarttime property value. 
     * @returns a Date
     */
    public get msdyn_tuesdaystarttime() {
        return this._msdyn_tuesdaystarttime;
    };
    /**
     * Sets the msdyn_tuesdaystarttime property value. 
     * @param value Value to set for the msdyn_tuesdaystarttime property.
     */
    public set msdyn_tuesdaystarttime(value: Date | undefined) {
        this._msdyn_tuesdaystarttime = value;
    };
    /**
     * Gets the msdyn_wednesdayendtime property value. 
     * @returns a Date
     */
    public get msdyn_wednesdayendtime() {
        return this._msdyn_wednesdayendtime;
    };
    /**
     * Sets the msdyn_wednesdayendtime property value. 
     * @param value Value to set for the msdyn_wednesdayendtime property.
     */
    public set msdyn_wednesdayendtime(value: Date | undefined) {
        this._msdyn_wednesdayendtime = value;
    };
    /**
     * Gets the msdyn_wednesdaystarttime property value. 
     * @returns a Date
     */
    public get msdyn_wednesdaystarttime() {
        return this._msdyn_wednesdaystarttime;
    };
    /**
     * Sets the msdyn_wednesdaystarttime property value. 
     * @param value Value to set for the msdyn_wednesdaystarttime property.
     */
    public set msdyn_wednesdaystarttime(value: Date | undefined) {
        this._msdyn_wednesdaystarttime = value;
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
        writer.writeStringValue("msdyn_beaconconfiguration", this.msdyn_beaconconfiguration);
        writer.writeBooleanValue("msdyn_enablelocationtracking", this.msdyn_enablelocationtracking);
        writer.writeDateValue("msdyn_fridayendtime", this.msdyn_fridayendtime);
        writer.writeDateValue("msdyn_fridaystarttime", this.msdyn_fridaystarttime);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_geolocationsettings_AsyncOperations", this.msdyn_geolocationsettings_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_geolocationsettings_BulkDeleteFailures", this.msdyn_geolocationsettings_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_geolocationsettings_DuplicateBaseRecord", this.msdyn_geolocationsettings_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_geolocationsettings_DuplicateMatchingRecord", this.msdyn_geolocationsettings_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_geolocationsettings_MailboxTrackingFolders", this.msdyn_geolocationsettings_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_geolocationsettings_PrincipalObjectAttributeAccesses", this.msdyn_geolocationsettings_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_geolocationsettings_ProcessSession", this.msdyn_geolocationsettings_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_geolocationsettings_SyncErrors", this.msdyn_geolocationsettings_SyncErrors);
        writer.writeStringValue("msdyn_geolocationsettingsid", this.msdyn_geolocationsettingsid);
        writer.writeDateValue("msdyn_mondayendtime", this.msdyn_mondayendtime);
        writer.writeDateValue("msdyn_mondaystarttime", this.msdyn_mondaystarttime);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeNumberValue("msdyn_refreshintervalseconds", this.msdyn_refreshintervalseconds);
        writer.writeDateValue("msdyn_saturdayendtime", this.msdyn_saturdayendtime);
        writer.writeDateValue("msdyn_saturdaystarttime", this.msdyn_saturdaystarttime);
        writer.writeDateValue("msdyn_sundayendtime", this.msdyn_sundayendtime);
        writer.writeDateValue("msdyn_sundaystarttime", this.msdyn_sundaystarttime);
        writer.writeDateValue("msdyn_thursdayendtime", this.msdyn_thursdayendtime);
        writer.writeDateValue("msdyn_thursdaystarttime", this.msdyn_thursdaystarttime);
        writer.writeDateValue("msdyn_tuesdayendtime", this.msdyn_tuesdayendtime);
        writer.writeDateValue("msdyn_tuesdaystarttime", this.msdyn_tuesdaystarttime);
        writer.writeDateValue("msdyn_wednesdayendtime", this.msdyn_wednesdayendtime);
        writer.writeDateValue("msdyn_wednesdaystarttime", this.msdyn_wednesdaystarttime);
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
