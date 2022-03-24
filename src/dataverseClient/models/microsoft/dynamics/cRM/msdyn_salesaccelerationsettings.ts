import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_worklistviewconfigurationFromDiscriminatorValue} from './createMsdyn_worklistviewconfigurationFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_worklistviewconfiguration, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_salesaccelerationsettings extends Crmbaseentity implements Parsable {
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
    private _msdyn_calendartype?: number | undefined;
    private _msdyn_disablewqautorefreshonmarkcomplete?: boolean | undefined;
    private _msdyn_entityconfiguration?: string | undefined;
    private _msdyn_isautocreatephonecallenabled?: boolean | undefined;
    private _msdyn_isdefaultsetting?: boolean | undefined;
    private _msdyn_issignalrnotificationenabled?: boolean | undefined;
    private _msdyn_isworkscheduleenabled?: boolean | undefined;
    private _msdyn_linkingconfiguration?: string | undefined;
    private _msdyn_linksequencesteptoactivity?: boolean | undefined;
    private _msdyn_migrationstatus?: string | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_recommendationsecurityroles?: string | undefined;
    private _msdyn_salesaccelerationsettings_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_salesaccelerationsettings_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_salesaccelerationsettings_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_salesaccelerationsettings_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_salesaccelerationsettings_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_salesaccelerationsettings_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_salesaccelerationsettings_ProcessSession?: Processsession[] | undefined;
    private _msdyn_salesaccelerationsettings_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_salesaccelerationsettingsid?: string | undefined;
    private _msdyn_securityroles?: string | undefined;
    private _msdyn_securityrolesassignmentrules?: string | undefined;
    private _msdyn_securityrolesnew?: string | undefined;
    private _msdyn_worklistviewconfig_salesaccelerationsettingsid?: Msdyn_worklistviewconfiguration[] | undefined;
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
     * Instantiates a new msdyn_salesaccelerationsettings and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_calendartype": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings).msdyn_calendartype = n.getNumberValue(); },
            "msdyn_disablewqautorefreshonmarkcomplete": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings).msdyn_disablewqautorefreshonmarkcomplete = n.getBooleanValue(); },
            "msdyn_entityconfiguration": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings).msdyn_entityconfiguration = n.getStringValue(); },
            "msdyn_isautocreatephonecallenabled": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings).msdyn_isautocreatephonecallenabled = n.getBooleanValue(); },
            "msdyn_isdefaultsetting": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings).msdyn_isdefaultsetting = n.getBooleanValue(); },
            "msdyn_issignalrnotificationenabled": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings).msdyn_issignalrnotificationenabled = n.getBooleanValue(); },
            "msdyn_isworkscheduleenabled": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings).msdyn_isworkscheduleenabled = n.getBooleanValue(); },
            "msdyn_linkingconfiguration": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings).msdyn_linkingconfiguration = n.getStringValue(); },
            "msdyn_linksequencesteptoactivity": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings).msdyn_linksequencesteptoactivity = n.getBooleanValue(); },
            "msdyn_migrationstatus": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings).msdyn_migrationstatus = n.getStringValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings).msdyn_name = n.getStringValue(); },
            "msdyn_recommendationsecurityroles": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings).msdyn_recommendationsecurityroles = n.getStringValue(); },
            "msdyn_salesaccelerationsettings_AsyncOperations": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings).msdyn_salesaccelerationsettings_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_salesaccelerationsettings_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings).msdyn_salesaccelerationsettings_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_salesaccelerationsettings_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings).msdyn_salesaccelerationsettings_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_salesaccelerationsettings_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings).msdyn_salesaccelerationsettings_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_salesaccelerationsettings_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings).msdyn_salesaccelerationsettings_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_salesaccelerationsettings_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings).msdyn_salesaccelerationsettings_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_salesaccelerationsettings_ProcessSession": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings).msdyn_salesaccelerationsettings_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_salesaccelerationsettings_SyncErrors": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings).msdyn_salesaccelerationsettings_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_salesaccelerationsettingsid": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings).msdyn_salesaccelerationsettingsid = n.getStringValue(); },
            "msdyn_securityroles": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings).msdyn_securityroles = n.getStringValue(); },
            "msdyn_securityrolesassignmentrules": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings).msdyn_securityrolesassignmentrules = n.getStringValue(); },
            "msdyn_securityrolesnew": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings).msdyn_securityrolesnew = n.getStringValue(); },
            "msdyn_worklistviewconfig_salesaccelerationsettingsid": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings).msdyn_worklistviewconfig_salesaccelerationsettingsid = n.getCollectionOfObjectValues<Msdyn_worklistviewconfiguration>(createMsdyn_worklistviewconfigurationFromDiscriminatorValue); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_salesaccelerationsettings).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_calendartype property value. 
     * @returns a integer
     */
    public get msdyn_calendartype() {
        return this._msdyn_calendartype;
    };
    /**
     * Sets the msdyn_calendartype property value. 
     * @param value Value to set for the msdyn_calendartype property.
     */
    public set msdyn_calendartype(value: number | undefined) {
        this._msdyn_calendartype = value;
    };
    /**
     * Gets the msdyn_disablewqautorefreshonmarkcomplete property value. 
     * @returns a boolean
     */
    public get msdyn_disablewqautorefreshonmarkcomplete() {
        return this._msdyn_disablewqautorefreshonmarkcomplete;
    };
    /**
     * Sets the msdyn_disablewqautorefreshonmarkcomplete property value. 
     * @param value Value to set for the msdyn_disablewqautorefreshonmarkcomplete property.
     */
    public set msdyn_disablewqautorefreshonmarkcomplete(value: boolean | undefined) {
        this._msdyn_disablewqautorefreshonmarkcomplete = value;
    };
    /**
     * Gets the msdyn_entityconfiguration property value. 
     * @returns a string
     */
    public get msdyn_entityconfiguration() {
        return this._msdyn_entityconfiguration;
    };
    /**
     * Sets the msdyn_entityconfiguration property value. 
     * @param value Value to set for the msdyn_entityconfiguration property.
     */
    public set msdyn_entityconfiguration(value: string | undefined) {
        this._msdyn_entityconfiguration = value;
    };
    /**
     * Gets the msdyn_isautocreatephonecallenabled property value. 
     * @returns a boolean
     */
    public get msdyn_isautocreatephonecallenabled() {
        return this._msdyn_isautocreatephonecallenabled;
    };
    /**
     * Sets the msdyn_isautocreatephonecallenabled property value. 
     * @param value Value to set for the msdyn_isautocreatephonecallenabled property.
     */
    public set msdyn_isautocreatephonecallenabled(value: boolean | undefined) {
        this._msdyn_isautocreatephonecallenabled = value;
    };
    /**
     * Gets the msdyn_isdefaultsetting property value. 
     * @returns a boolean
     */
    public get msdyn_isdefaultsetting() {
        return this._msdyn_isdefaultsetting;
    };
    /**
     * Sets the msdyn_isdefaultsetting property value. 
     * @param value Value to set for the msdyn_isdefaultsetting property.
     */
    public set msdyn_isdefaultsetting(value: boolean | undefined) {
        this._msdyn_isdefaultsetting = value;
    };
    /**
     * Gets the msdyn_issignalrnotificationenabled property value. 
     * @returns a boolean
     */
    public get msdyn_issignalrnotificationenabled() {
        return this._msdyn_issignalrnotificationenabled;
    };
    /**
     * Sets the msdyn_issignalrnotificationenabled property value. 
     * @param value Value to set for the msdyn_issignalrnotificationenabled property.
     */
    public set msdyn_issignalrnotificationenabled(value: boolean | undefined) {
        this._msdyn_issignalrnotificationenabled = value;
    };
    /**
     * Gets the msdyn_isworkscheduleenabled property value. 
     * @returns a boolean
     */
    public get msdyn_isworkscheduleenabled() {
        return this._msdyn_isworkscheduleenabled;
    };
    /**
     * Sets the msdyn_isworkscheduleenabled property value. 
     * @param value Value to set for the msdyn_isworkscheduleenabled property.
     */
    public set msdyn_isworkscheduleenabled(value: boolean | undefined) {
        this._msdyn_isworkscheduleenabled = value;
    };
    /**
     * Gets the msdyn_linkingconfiguration property value. 
     * @returns a string
     */
    public get msdyn_linkingconfiguration() {
        return this._msdyn_linkingconfiguration;
    };
    /**
     * Sets the msdyn_linkingconfiguration property value. 
     * @param value Value to set for the msdyn_linkingconfiguration property.
     */
    public set msdyn_linkingconfiguration(value: string | undefined) {
        this._msdyn_linkingconfiguration = value;
    };
    /**
     * Gets the msdyn_linksequencesteptoactivity property value. 
     * @returns a boolean
     */
    public get msdyn_linksequencesteptoactivity() {
        return this._msdyn_linksequencesteptoactivity;
    };
    /**
     * Sets the msdyn_linksequencesteptoactivity property value. 
     * @param value Value to set for the msdyn_linksequencesteptoactivity property.
     */
    public set msdyn_linksequencesteptoactivity(value: boolean | undefined) {
        this._msdyn_linksequencesteptoactivity = value;
    };
    /**
     * Gets the msdyn_migrationstatus property value. 
     * @returns a string
     */
    public get msdyn_migrationstatus() {
        return this._msdyn_migrationstatus;
    };
    /**
     * Sets the msdyn_migrationstatus property value. 
     * @param value Value to set for the msdyn_migrationstatus property.
     */
    public set msdyn_migrationstatus(value: string | undefined) {
        this._msdyn_migrationstatus = value;
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
     * Gets the msdyn_recommendationsecurityroles property value. 
     * @returns a string
     */
    public get msdyn_recommendationsecurityroles() {
        return this._msdyn_recommendationsecurityroles;
    };
    /**
     * Sets the msdyn_recommendationsecurityroles property value. 
     * @param value Value to set for the msdyn_recommendationsecurityroles property.
     */
    public set msdyn_recommendationsecurityroles(value: string | undefined) {
        this._msdyn_recommendationsecurityroles = value;
    };
    /**
     * Gets the msdyn_salesaccelerationsettings_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_salesaccelerationsettings_AsyncOperations() {
        return this._msdyn_salesaccelerationsettings_AsyncOperations;
    };
    /**
     * Sets the msdyn_salesaccelerationsettings_AsyncOperations property value. 
     * @param value Value to set for the msdyn_salesaccelerationsettings_AsyncOperations property.
     */
    public set msdyn_salesaccelerationsettings_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_salesaccelerationsettings_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_salesaccelerationsettings_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_salesaccelerationsettings_BulkDeleteFailures() {
        return this._msdyn_salesaccelerationsettings_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_salesaccelerationsettings_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_salesaccelerationsettings_BulkDeleteFailures property.
     */
    public set msdyn_salesaccelerationsettings_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_salesaccelerationsettings_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_salesaccelerationsettings_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_salesaccelerationsettings_DuplicateBaseRecord() {
        return this._msdyn_salesaccelerationsettings_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_salesaccelerationsettings_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_salesaccelerationsettings_DuplicateBaseRecord property.
     */
    public set msdyn_salesaccelerationsettings_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_salesaccelerationsettings_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_salesaccelerationsettings_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_salesaccelerationsettings_DuplicateMatchingRecord() {
        return this._msdyn_salesaccelerationsettings_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_salesaccelerationsettings_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_salesaccelerationsettings_DuplicateMatchingRecord property.
     */
    public set msdyn_salesaccelerationsettings_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_salesaccelerationsettings_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_salesaccelerationsettings_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_salesaccelerationsettings_MailboxTrackingFolders() {
        return this._msdyn_salesaccelerationsettings_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_salesaccelerationsettings_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_salesaccelerationsettings_MailboxTrackingFolders property.
     */
    public set msdyn_salesaccelerationsettings_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_salesaccelerationsettings_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_salesaccelerationsettings_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_salesaccelerationsettings_PrincipalObjectAttributeAccesses() {
        return this._msdyn_salesaccelerationsettings_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_salesaccelerationsettings_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_salesaccelerationsettings_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_salesaccelerationsettings_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_salesaccelerationsettings_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_salesaccelerationsettings_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_salesaccelerationsettings_ProcessSession() {
        return this._msdyn_salesaccelerationsettings_ProcessSession;
    };
    /**
     * Sets the msdyn_salesaccelerationsettings_ProcessSession property value. 
     * @param value Value to set for the msdyn_salesaccelerationsettings_ProcessSession property.
     */
    public set msdyn_salesaccelerationsettings_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_salesaccelerationsettings_ProcessSession = value;
    };
    /**
     * Gets the msdyn_salesaccelerationsettings_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_salesaccelerationsettings_SyncErrors() {
        return this._msdyn_salesaccelerationsettings_SyncErrors;
    };
    /**
     * Sets the msdyn_salesaccelerationsettings_SyncErrors property value. 
     * @param value Value to set for the msdyn_salesaccelerationsettings_SyncErrors property.
     */
    public set msdyn_salesaccelerationsettings_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_salesaccelerationsettings_SyncErrors = value;
    };
    /**
     * Gets the msdyn_salesaccelerationsettingsid property value. 
     * @returns a string
     */
    public get msdyn_salesaccelerationsettingsid() {
        return this._msdyn_salesaccelerationsettingsid;
    };
    /**
     * Sets the msdyn_salesaccelerationsettingsid property value. 
     * @param value Value to set for the msdyn_salesaccelerationsettingsid property.
     */
    public set msdyn_salesaccelerationsettingsid(value: string | undefined) {
        this._msdyn_salesaccelerationsettingsid = value;
    };
    /**
     * Gets the msdyn_securityroles property value. 
     * @returns a string
     */
    public get msdyn_securityroles() {
        return this._msdyn_securityroles;
    };
    /**
     * Sets the msdyn_securityroles property value. 
     * @param value Value to set for the msdyn_securityroles property.
     */
    public set msdyn_securityroles(value: string | undefined) {
        this._msdyn_securityroles = value;
    };
    /**
     * Gets the msdyn_securityrolesassignmentrules property value. 
     * @returns a string
     */
    public get msdyn_securityrolesassignmentrules() {
        return this._msdyn_securityrolesassignmentrules;
    };
    /**
     * Sets the msdyn_securityrolesassignmentrules property value. 
     * @param value Value to set for the msdyn_securityrolesassignmentrules property.
     */
    public set msdyn_securityrolesassignmentrules(value: string | undefined) {
        this._msdyn_securityrolesassignmentrules = value;
    };
    /**
     * Gets the msdyn_securityrolesnew property value. 
     * @returns a string
     */
    public get msdyn_securityrolesnew() {
        return this._msdyn_securityrolesnew;
    };
    /**
     * Sets the msdyn_securityrolesnew property value. 
     * @param value Value to set for the msdyn_securityrolesnew property.
     */
    public set msdyn_securityrolesnew(value: string | undefined) {
        this._msdyn_securityrolesnew = value;
    };
    /**
     * Gets the msdyn_worklistviewconfig_salesaccelerationsettingsid property value. 
     * @returns a msdyn_worklistviewconfiguration
     */
    public get msdyn_worklistviewconfig_salesaccelerationsettingsid() {
        return this._msdyn_worklistviewconfig_salesaccelerationsettingsid;
    };
    /**
     * Sets the msdyn_worklistviewconfig_salesaccelerationsettingsid property value. 
     * @param value Value to set for the msdyn_worklistviewconfig_salesaccelerationsettingsid property.
     */
    public set msdyn_worklistviewconfig_salesaccelerationsettingsid(value: Msdyn_worklistviewconfiguration[] | undefined) {
        this._msdyn_worklistviewconfig_salesaccelerationsettingsid = value;
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
        writer.writeNumberValue("msdyn_calendartype", this.msdyn_calendartype);
        writer.writeBooleanValue("msdyn_disablewqautorefreshonmarkcomplete", this.msdyn_disablewqautorefreshonmarkcomplete);
        writer.writeStringValue("msdyn_entityconfiguration", this.msdyn_entityconfiguration);
        writer.writeBooleanValue("msdyn_isautocreatephonecallenabled", this.msdyn_isautocreatephonecallenabled);
        writer.writeBooleanValue("msdyn_isdefaultsetting", this.msdyn_isdefaultsetting);
        writer.writeBooleanValue("msdyn_issignalrnotificationenabled", this.msdyn_issignalrnotificationenabled);
        writer.writeBooleanValue("msdyn_isworkscheduleenabled", this.msdyn_isworkscheduleenabled);
        writer.writeStringValue("msdyn_linkingconfiguration", this.msdyn_linkingconfiguration);
        writer.writeBooleanValue("msdyn_linksequencesteptoactivity", this.msdyn_linksequencesteptoactivity);
        writer.writeStringValue("msdyn_migrationstatus", this.msdyn_migrationstatus);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeStringValue("msdyn_recommendationsecurityroles", this.msdyn_recommendationsecurityroles);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_salesaccelerationsettings_AsyncOperations", this.msdyn_salesaccelerationsettings_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_salesaccelerationsettings_BulkDeleteFailures", this.msdyn_salesaccelerationsettings_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_salesaccelerationsettings_DuplicateBaseRecord", this.msdyn_salesaccelerationsettings_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_salesaccelerationsettings_DuplicateMatchingRecord", this.msdyn_salesaccelerationsettings_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_salesaccelerationsettings_MailboxTrackingFolders", this.msdyn_salesaccelerationsettings_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_salesaccelerationsettings_PrincipalObjectAttributeAccesses", this.msdyn_salesaccelerationsettings_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_salesaccelerationsettings_ProcessSession", this.msdyn_salesaccelerationsettings_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_salesaccelerationsettings_SyncErrors", this.msdyn_salesaccelerationsettings_SyncErrors);
        writer.writeStringValue("msdyn_salesaccelerationsettingsid", this.msdyn_salesaccelerationsettingsid);
        writer.writeStringValue("msdyn_securityroles", this.msdyn_securityroles);
        writer.writeStringValue("msdyn_securityrolesassignmentrules", this.msdyn_securityrolesassignmentrules);
        writer.writeStringValue("msdyn_securityrolesnew", this.msdyn_securityrolesnew);
        writer.writeCollectionOfObjectValues<Msdyn_worklistviewconfiguration>("msdyn_worklistviewconfig_salesaccelerationsettingsid", this.msdyn_worklistviewconfig_salesaccelerationsettingsid);
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
