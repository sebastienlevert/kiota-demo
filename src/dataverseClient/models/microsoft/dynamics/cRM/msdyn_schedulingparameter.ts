import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_schedulingparameter extends Crmbaseentity implements Parsable {
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
    private _msdyn_advancedsettings?: string | undefined;
    private _msdyn_autoupdatebookingtravel?: number | undefined;
    private _msdyn_backgroundjobsconfiguration?: string | undefined;
    private _msdyn_connecttomaps?: boolean | undefined;
    private _msdyn_customgeolatitudefield?: string | undefined;
    private _msdyn_customgeolocationentity?: string | undefined;
    private _msdyn_customgeolongitudefield?: string | undefined;
    private _msdyn_customgeoresourcefield?: string | undefined;
    private _msdyn_customgeotimestampfield?: string | undefined;
    private _msdyn_defaultradiusunit?: number | undefined;
    private _msdyn_defaultradiusvalue?: number | undefined;
    private _msdyn_disablesanitizinghtmltemplates?: boolean | undefined;
    private _msdyn_enableappointments?: number | undefined;
    private _msdyn_enablecustomgeolocation?: boolean | undefined;
    private _msdyn_enableoptimizer?: boolean | undefined;
    private _msdyn_enableoutlookschedules?: number | undefined;
    private _msdyn_geolocationexpiresafterxminutes?: number | undefined;
    private _msdyn_geolocationrefreshintervalseconds?: number | undefined;
    private _msdyn_internalflag?: string | undefined;
    private _msdyn_mapapikey?: string | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_saautofilterserviceterritory?: boolean | undefined;
    private _msdyn_scheduleboardrefreshintervalseconds?: number | undefined;
    private _msdyn_schedulingparameter_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_schedulingparameter_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_schedulingparameter_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_schedulingparameter_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_schedulingparameter_ProcessSession?: Processsession[] | undefined;
    private _msdyn_schedulingparameter_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_schedulingparameterid?: string | undefined;
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
     * Instantiates a new msdyn_schedulingparameter and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_schedulingparameter)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_schedulingparameter)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_schedulingparameter)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_schedulingparameter)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_schedulingparameter)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_schedulingparameter).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_schedulingparameter).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_schedulingparameter).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_schedulingparameter).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_schedulingparameter).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_schedulingparameter).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_schedulingparameter).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_advancedsettings": (o, n) => { (o as unknown as Msdyn_schedulingparameter).msdyn_advancedsettings = n.getStringValue(); },
            "msdyn_autoupdatebookingtravel": (o, n) => { (o as unknown as Msdyn_schedulingparameter).msdyn_autoupdatebookingtravel = n.getNumberValue(); },
            "msdyn_backgroundjobsconfiguration": (o, n) => { (o as unknown as Msdyn_schedulingparameter).msdyn_backgroundjobsconfiguration = n.getStringValue(); },
            "msdyn_connecttomaps": (o, n) => { (o as unknown as Msdyn_schedulingparameter).msdyn_connecttomaps = n.getBooleanValue(); },
            "msdyn_customgeolatitudefield": (o, n) => { (o as unknown as Msdyn_schedulingparameter).msdyn_customgeolatitudefield = n.getStringValue(); },
            "msdyn_customgeolocationentity": (o, n) => { (o as unknown as Msdyn_schedulingparameter).msdyn_customgeolocationentity = n.getStringValue(); },
            "msdyn_customgeolongitudefield": (o, n) => { (o as unknown as Msdyn_schedulingparameter).msdyn_customgeolongitudefield = n.getStringValue(); },
            "msdyn_customgeoresourcefield": (o, n) => { (o as unknown as Msdyn_schedulingparameter).msdyn_customgeoresourcefield = n.getStringValue(); },
            "msdyn_customgeotimestampfield": (o, n) => { (o as unknown as Msdyn_schedulingparameter).msdyn_customgeotimestampfield = n.getStringValue(); },
            "msdyn_defaultradiusunit": (o, n) => { (o as unknown as Msdyn_schedulingparameter).msdyn_defaultradiusunit = n.getNumberValue(); },
            "msdyn_defaultradiusvalue": (o, n) => { (o as unknown as Msdyn_schedulingparameter).msdyn_defaultradiusvalue = n.getNumberValue(); },
            "msdyn_disablesanitizinghtmltemplates": (o, n) => { (o as unknown as Msdyn_schedulingparameter).msdyn_disablesanitizinghtmltemplates = n.getBooleanValue(); },
            "msdyn_enableappointments": (o, n) => { (o as unknown as Msdyn_schedulingparameter).msdyn_enableappointments = n.getNumberValue(); },
            "msdyn_enablecustomgeolocation": (o, n) => { (o as unknown as Msdyn_schedulingparameter).msdyn_enablecustomgeolocation = n.getBooleanValue(); },
            "msdyn_enableoptimizer": (o, n) => { (o as unknown as Msdyn_schedulingparameter).msdyn_enableoptimizer = n.getBooleanValue(); },
            "msdyn_enableoutlookschedules": (o, n) => { (o as unknown as Msdyn_schedulingparameter).msdyn_enableoutlookschedules = n.getNumberValue(); },
            "msdyn_geolocationexpiresafterxminutes": (o, n) => { (o as unknown as Msdyn_schedulingparameter).msdyn_geolocationexpiresafterxminutes = n.getNumberValue(); },
            "msdyn_geolocationrefreshintervalseconds": (o, n) => { (o as unknown as Msdyn_schedulingparameter).msdyn_geolocationrefreshintervalseconds = n.getNumberValue(); },
            "msdyn_internalflag": (o, n) => { (o as unknown as Msdyn_schedulingparameter).msdyn_internalflag = n.getStringValue(); },
            "msdyn_mapapikey": (o, n) => { (o as unknown as Msdyn_schedulingparameter).msdyn_mapapikey = n.getStringValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_schedulingparameter).msdyn_name = n.getStringValue(); },
            "msdyn_saautofilterserviceterritory": (o, n) => { (o as unknown as Msdyn_schedulingparameter).msdyn_saautofilterserviceterritory = n.getBooleanValue(); },
            "msdyn_scheduleboardrefreshintervalseconds": (o, n) => { (o as unknown as Msdyn_schedulingparameter).msdyn_scheduleboardrefreshintervalseconds = n.getNumberValue(); },
            "msdyn_schedulingparameter_AsyncOperations": (o, n) => { (o as unknown as Msdyn_schedulingparameter).msdyn_schedulingparameter_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_schedulingparameter_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_schedulingparameter).msdyn_schedulingparameter_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_schedulingparameter_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_schedulingparameter).msdyn_schedulingparameter_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_schedulingparameter_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_schedulingparameter).msdyn_schedulingparameter_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_schedulingparameter_ProcessSession": (o, n) => { (o as unknown as Msdyn_schedulingparameter).msdyn_schedulingparameter_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_schedulingparameter_SyncErrors": (o, n) => { (o as unknown as Msdyn_schedulingparameter).msdyn_schedulingparameter_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_schedulingparameterid": (o, n) => { (o as unknown as Msdyn_schedulingparameter).msdyn_schedulingparameterid = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_schedulingparameter).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_schedulingparameter).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_schedulingparameter).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_schedulingparameter).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_schedulingparameter).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_schedulingparameter).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_schedulingparameter).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_advancedsettings property value. 
     * @returns a string
     */
    public get msdyn_advancedsettings() {
        return this._msdyn_advancedsettings;
    };
    /**
     * Sets the msdyn_advancedsettings property value. 
     * @param value Value to set for the msdyn_advancedsettings property.
     */
    public set msdyn_advancedsettings(value: string | undefined) {
        this._msdyn_advancedsettings = value;
    };
    /**
     * Gets the msdyn_autoupdatebookingtravel property value. 
     * @returns a integer
     */
    public get msdyn_autoupdatebookingtravel() {
        return this._msdyn_autoupdatebookingtravel;
    };
    /**
     * Sets the msdyn_autoupdatebookingtravel property value. 
     * @param value Value to set for the msdyn_autoupdatebookingtravel property.
     */
    public set msdyn_autoupdatebookingtravel(value: number | undefined) {
        this._msdyn_autoupdatebookingtravel = value;
    };
    /**
     * Gets the msdyn_backgroundjobsconfiguration property value. 
     * @returns a string
     */
    public get msdyn_backgroundjobsconfiguration() {
        return this._msdyn_backgroundjobsconfiguration;
    };
    /**
     * Sets the msdyn_backgroundjobsconfiguration property value. 
     * @param value Value to set for the msdyn_backgroundjobsconfiguration property.
     */
    public set msdyn_backgroundjobsconfiguration(value: string | undefined) {
        this._msdyn_backgroundjobsconfiguration = value;
    };
    /**
     * Gets the msdyn_connecttomaps property value. 
     * @returns a boolean
     */
    public get msdyn_connecttomaps() {
        return this._msdyn_connecttomaps;
    };
    /**
     * Sets the msdyn_connecttomaps property value. 
     * @param value Value to set for the msdyn_connecttomaps property.
     */
    public set msdyn_connecttomaps(value: boolean | undefined) {
        this._msdyn_connecttomaps = value;
    };
    /**
     * Gets the msdyn_customgeolatitudefield property value. 
     * @returns a string
     */
    public get msdyn_customgeolatitudefield() {
        return this._msdyn_customgeolatitudefield;
    };
    /**
     * Sets the msdyn_customgeolatitudefield property value. 
     * @param value Value to set for the msdyn_customgeolatitudefield property.
     */
    public set msdyn_customgeolatitudefield(value: string | undefined) {
        this._msdyn_customgeolatitudefield = value;
    };
    /**
     * Gets the msdyn_customgeolocationentity property value. 
     * @returns a string
     */
    public get msdyn_customgeolocationentity() {
        return this._msdyn_customgeolocationentity;
    };
    /**
     * Sets the msdyn_customgeolocationentity property value. 
     * @param value Value to set for the msdyn_customgeolocationentity property.
     */
    public set msdyn_customgeolocationentity(value: string | undefined) {
        this._msdyn_customgeolocationentity = value;
    };
    /**
     * Gets the msdyn_customgeolongitudefield property value. 
     * @returns a string
     */
    public get msdyn_customgeolongitudefield() {
        return this._msdyn_customgeolongitudefield;
    };
    /**
     * Sets the msdyn_customgeolongitudefield property value. 
     * @param value Value to set for the msdyn_customgeolongitudefield property.
     */
    public set msdyn_customgeolongitudefield(value: string | undefined) {
        this._msdyn_customgeolongitudefield = value;
    };
    /**
     * Gets the msdyn_customgeoresourcefield property value. 
     * @returns a string
     */
    public get msdyn_customgeoresourcefield() {
        return this._msdyn_customgeoresourcefield;
    };
    /**
     * Sets the msdyn_customgeoresourcefield property value. 
     * @param value Value to set for the msdyn_customgeoresourcefield property.
     */
    public set msdyn_customgeoresourcefield(value: string | undefined) {
        this._msdyn_customgeoresourcefield = value;
    };
    /**
     * Gets the msdyn_customgeotimestampfield property value. 
     * @returns a string
     */
    public get msdyn_customgeotimestampfield() {
        return this._msdyn_customgeotimestampfield;
    };
    /**
     * Sets the msdyn_customgeotimestampfield property value. 
     * @param value Value to set for the msdyn_customgeotimestampfield property.
     */
    public set msdyn_customgeotimestampfield(value: string | undefined) {
        this._msdyn_customgeotimestampfield = value;
    };
    /**
     * Gets the msdyn_defaultradiusunit property value. 
     * @returns a integer
     */
    public get msdyn_defaultradiusunit() {
        return this._msdyn_defaultradiusunit;
    };
    /**
     * Sets the msdyn_defaultradiusunit property value. 
     * @param value Value to set for the msdyn_defaultradiusunit property.
     */
    public set msdyn_defaultradiusunit(value: number | undefined) {
        this._msdyn_defaultradiusunit = value;
    };
    /**
     * Gets the msdyn_defaultradiusvalue property value. 
     * @returns a integer
     */
    public get msdyn_defaultradiusvalue() {
        return this._msdyn_defaultradiusvalue;
    };
    /**
     * Sets the msdyn_defaultradiusvalue property value. 
     * @param value Value to set for the msdyn_defaultradiusvalue property.
     */
    public set msdyn_defaultradiusvalue(value: number | undefined) {
        this._msdyn_defaultradiusvalue = value;
    };
    /**
     * Gets the msdyn_disablesanitizinghtmltemplates property value. 
     * @returns a boolean
     */
    public get msdyn_disablesanitizinghtmltemplates() {
        return this._msdyn_disablesanitizinghtmltemplates;
    };
    /**
     * Sets the msdyn_disablesanitizinghtmltemplates property value. 
     * @param value Value to set for the msdyn_disablesanitizinghtmltemplates property.
     */
    public set msdyn_disablesanitizinghtmltemplates(value: boolean | undefined) {
        this._msdyn_disablesanitizinghtmltemplates = value;
    };
    /**
     * Gets the msdyn_enableappointments property value. 
     * @returns a integer
     */
    public get msdyn_enableappointments() {
        return this._msdyn_enableappointments;
    };
    /**
     * Sets the msdyn_enableappointments property value. 
     * @param value Value to set for the msdyn_enableappointments property.
     */
    public set msdyn_enableappointments(value: number | undefined) {
        this._msdyn_enableappointments = value;
    };
    /**
     * Gets the msdyn_enablecustomgeolocation property value. 
     * @returns a boolean
     */
    public get msdyn_enablecustomgeolocation() {
        return this._msdyn_enablecustomgeolocation;
    };
    /**
     * Sets the msdyn_enablecustomgeolocation property value. 
     * @param value Value to set for the msdyn_enablecustomgeolocation property.
     */
    public set msdyn_enablecustomgeolocation(value: boolean | undefined) {
        this._msdyn_enablecustomgeolocation = value;
    };
    /**
     * Gets the msdyn_enableoptimizer property value. 
     * @returns a boolean
     */
    public get msdyn_enableoptimizer() {
        return this._msdyn_enableoptimizer;
    };
    /**
     * Sets the msdyn_enableoptimizer property value. 
     * @param value Value to set for the msdyn_enableoptimizer property.
     */
    public set msdyn_enableoptimizer(value: boolean | undefined) {
        this._msdyn_enableoptimizer = value;
    };
    /**
     * Gets the msdyn_enableoutlookschedules property value. 
     * @returns a integer
     */
    public get msdyn_enableoutlookschedules() {
        return this._msdyn_enableoutlookschedules;
    };
    /**
     * Sets the msdyn_enableoutlookschedules property value. 
     * @param value Value to set for the msdyn_enableoutlookschedules property.
     */
    public set msdyn_enableoutlookschedules(value: number | undefined) {
        this._msdyn_enableoutlookschedules = value;
    };
    /**
     * Gets the msdyn_geolocationexpiresafterxminutes property value. 
     * @returns a integer
     */
    public get msdyn_geolocationexpiresafterxminutes() {
        return this._msdyn_geolocationexpiresafterxminutes;
    };
    /**
     * Sets the msdyn_geolocationexpiresafterxminutes property value. 
     * @param value Value to set for the msdyn_geolocationexpiresafterxminutes property.
     */
    public set msdyn_geolocationexpiresafterxminutes(value: number | undefined) {
        this._msdyn_geolocationexpiresafterxminutes = value;
    };
    /**
     * Gets the msdyn_geolocationrefreshintervalseconds property value. 
     * @returns a integer
     */
    public get msdyn_geolocationrefreshintervalseconds() {
        return this._msdyn_geolocationrefreshintervalseconds;
    };
    /**
     * Sets the msdyn_geolocationrefreshintervalseconds property value. 
     * @param value Value to set for the msdyn_geolocationrefreshintervalseconds property.
     */
    public set msdyn_geolocationrefreshintervalseconds(value: number | undefined) {
        this._msdyn_geolocationrefreshintervalseconds = value;
    };
    /**
     * Gets the msdyn_internalflag property value. 
     * @returns a string
     */
    public get msdyn_internalflag() {
        return this._msdyn_internalflag;
    };
    /**
     * Sets the msdyn_internalflag property value. 
     * @param value Value to set for the msdyn_internalflag property.
     */
    public set msdyn_internalflag(value: string | undefined) {
        this._msdyn_internalflag = value;
    };
    /**
     * Gets the msdyn_mapapikey property value. 
     * @returns a string
     */
    public get msdyn_mapapikey() {
        return this._msdyn_mapapikey;
    };
    /**
     * Sets the msdyn_mapapikey property value. 
     * @param value Value to set for the msdyn_mapapikey property.
     */
    public set msdyn_mapapikey(value: string | undefined) {
        this._msdyn_mapapikey = value;
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
     * Gets the msdyn_saautofilterserviceterritory property value. 
     * @returns a boolean
     */
    public get msdyn_saautofilterserviceterritory() {
        return this._msdyn_saautofilterserviceterritory;
    };
    /**
     * Sets the msdyn_saautofilterserviceterritory property value. 
     * @param value Value to set for the msdyn_saautofilterserviceterritory property.
     */
    public set msdyn_saautofilterserviceterritory(value: boolean | undefined) {
        this._msdyn_saautofilterserviceterritory = value;
    };
    /**
     * Gets the msdyn_scheduleboardrefreshintervalseconds property value. 
     * @returns a integer
     */
    public get msdyn_scheduleboardrefreshintervalseconds() {
        return this._msdyn_scheduleboardrefreshintervalseconds;
    };
    /**
     * Sets the msdyn_scheduleboardrefreshintervalseconds property value. 
     * @param value Value to set for the msdyn_scheduleboardrefreshintervalseconds property.
     */
    public set msdyn_scheduleboardrefreshintervalseconds(value: number | undefined) {
        this._msdyn_scheduleboardrefreshintervalseconds = value;
    };
    /**
     * Gets the msdyn_schedulingparameter_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_schedulingparameter_AsyncOperations() {
        return this._msdyn_schedulingparameter_AsyncOperations;
    };
    /**
     * Sets the msdyn_schedulingparameter_AsyncOperations property value. 
     * @param value Value to set for the msdyn_schedulingparameter_AsyncOperations property.
     */
    public set msdyn_schedulingparameter_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_schedulingparameter_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_schedulingparameter_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_schedulingparameter_BulkDeleteFailures() {
        return this._msdyn_schedulingparameter_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_schedulingparameter_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_schedulingparameter_BulkDeleteFailures property.
     */
    public set msdyn_schedulingparameter_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_schedulingparameter_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_schedulingparameter_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_schedulingparameter_MailboxTrackingFolders() {
        return this._msdyn_schedulingparameter_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_schedulingparameter_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_schedulingparameter_MailboxTrackingFolders property.
     */
    public set msdyn_schedulingparameter_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_schedulingparameter_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_schedulingparameter_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_schedulingparameter_PrincipalObjectAttributeAccesses() {
        return this._msdyn_schedulingparameter_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_schedulingparameter_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_schedulingparameter_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_schedulingparameter_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_schedulingparameter_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_schedulingparameter_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_schedulingparameter_ProcessSession() {
        return this._msdyn_schedulingparameter_ProcessSession;
    };
    /**
     * Sets the msdyn_schedulingparameter_ProcessSession property value. 
     * @param value Value to set for the msdyn_schedulingparameter_ProcessSession property.
     */
    public set msdyn_schedulingparameter_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_schedulingparameter_ProcessSession = value;
    };
    /**
     * Gets the msdyn_schedulingparameter_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_schedulingparameter_SyncErrors() {
        return this._msdyn_schedulingparameter_SyncErrors;
    };
    /**
     * Sets the msdyn_schedulingparameter_SyncErrors property value. 
     * @param value Value to set for the msdyn_schedulingparameter_SyncErrors property.
     */
    public set msdyn_schedulingparameter_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_schedulingparameter_SyncErrors = value;
    };
    /**
     * Gets the msdyn_schedulingparameterid property value. 
     * @returns a string
     */
    public get msdyn_schedulingparameterid() {
        return this._msdyn_schedulingparameterid;
    };
    /**
     * Sets the msdyn_schedulingparameterid property value. 
     * @param value Value to set for the msdyn_schedulingparameterid property.
     */
    public set msdyn_schedulingparameterid(value: string | undefined) {
        this._msdyn_schedulingparameterid = value;
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
        writer.writeStringValue("msdyn_advancedsettings", this.msdyn_advancedsettings);
        writer.writeNumberValue("msdyn_autoupdatebookingtravel", this.msdyn_autoupdatebookingtravel);
        writer.writeStringValue("msdyn_backgroundjobsconfiguration", this.msdyn_backgroundjobsconfiguration);
        writer.writeBooleanValue("msdyn_connecttomaps", this.msdyn_connecttomaps);
        writer.writeStringValue("msdyn_customgeolatitudefield", this.msdyn_customgeolatitudefield);
        writer.writeStringValue("msdyn_customgeolocationentity", this.msdyn_customgeolocationentity);
        writer.writeStringValue("msdyn_customgeolongitudefield", this.msdyn_customgeolongitudefield);
        writer.writeStringValue("msdyn_customgeoresourcefield", this.msdyn_customgeoresourcefield);
        writer.writeStringValue("msdyn_customgeotimestampfield", this.msdyn_customgeotimestampfield);
        writer.writeNumberValue("msdyn_defaultradiusunit", this.msdyn_defaultradiusunit);
        writer.writeNumberValue("msdyn_defaultradiusvalue", this.msdyn_defaultradiusvalue);
        writer.writeBooleanValue("msdyn_disablesanitizinghtmltemplates", this.msdyn_disablesanitizinghtmltemplates);
        writer.writeNumberValue("msdyn_enableappointments", this.msdyn_enableappointments);
        writer.writeBooleanValue("msdyn_enablecustomgeolocation", this.msdyn_enablecustomgeolocation);
        writer.writeBooleanValue("msdyn_enableoptimizer", this.msdyn_enableoptimizer);
        writer.writeNumberValue("msdyn_enableoutlookschedules", this.msdyn_enableoutlookschedules);
        writer.writeNumberValue("msdyn_geolocationexpiresafterxminutes", this.msdyn_geolocationexpiresafterxminutes);
        writer.writeNumberValue("msdyn_geolocationrefreshintervalseconds", this.msdyn_geolocationrefreshintervalseconds);
        writer.writeStringValue("msdyn_internalflag", this.msdyn_internalflag);
        writer.writeStringValue("msdyn_mapapikey", this.msdyn_mapapikey);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeBooleanValue("msdyn_saautofilterserviceterritory", this.msdyn_saautofilterserviceterritory);
        writer.writeNumberValue("msdyn_scheduleboardrefreshintervalseconds", this.msdyn_scheduleboardrefreshintervalseconds);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_schedulingparameter_AsyncOperations", this.msdyn_schedulingparameter_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_schedulingparameter_BulkDeleteFailures", this.msdyn_schedulingparameter_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_schedulingparameter_MailboxTrackingFolders", this.msdyn_schedulingparameter_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_schedulingparameter_PrincipalObjectAttributeAccesses", this.msdyn_schedulingparameter_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_schedulingparameter_ProcessSession", this.msdyn_schedulingparameter_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_schedulingparameter_SyncErrors", this.msdyn_schedulingparameter_SyncErrors);
        writer.writeStringValue("msdyn_schedulingparameterid", this.msdyn_schedulingparameterid);
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
