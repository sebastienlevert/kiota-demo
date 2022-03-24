import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_clientextensionFromDiscriminatorValue} from './createMsdyn_clientextensionFromDiscriminatorValue';
import {createMsdyn_configurationFromDiscriminatorValue} from './createMsdyn_configurationFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_clientextension, Msdyn_configuration, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_scheduleboardsetting extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_filterlayout_value?: string | undefined;
    private __msdyn_resourcecelltemplate_value?: string | undefined;
    private __msdyn_retrieveresourcesquery_value?: string | undefined;
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
    private _msdyn_bookbasedon?: boolean | undefined;
    private _msdyn_customtabname?: string | undefined;
    private _msdyn_customtabwebresource?: string | undefined;
    private _msdyn_FilterLayout?: Msdyn_configuration | undefined;
    private _msdyn_filtervalues?: string | undefined;
    private _msdyn_fullybookedcolor?: string | undefined;
    private _msdyn_hidecancelled?: boolean | undefined;
    private _msdyn_ispublic?: boolean | undefined;
    private _msdyn_issynchronizeresources?: boolean | undefined;
    private _msdyn_mapviewtabplacement?: boolean | undefined;
    private _msdyn_msdyn_scheduleboardsetting_msdyn_clientextension_scheduleboardsettingid?: Msdyn_clientextension[] | undefined;
    private _msdyn_notbookedcolor?: string | undefined;
    private _msdyn_ordernumber?: number | undefined;
    private _msdyn_organizationalunittooltipsviewid?: string | undefined;
    private _msdyn_organizationalunitviewid?: string | undefined;
    private _msdyn_overbookedcolor?: string | undefined;
    private _msdyn_partiallybookedcolor?: string | undefined;
    private _msdyn_ResourceCellTemplate?: Msdyn_configuration | undefined;
    private _msdyn_RetrieveResourcesQuery?: Msdyn_configuration | undefined;
    private _msdyn_saavailablecolor?: string | undefined;
    private _msdyn_saavailableicon?: string | undefined;
    private _msdyn_saavailableicondefault?: boolean | undefined;
    private _msdyn_sapartiallyavailablecolor?: string | undefined;
    private _msdyn_sapartiallyavailableicon?: string | undefined;
    private _msdyn_sapartiallyavailableicondefault?: boolean | undefined;
    private _msdyn_saunavailablecolor?: string | undefined;
    private _msdyn_saunavailableicon?: string | undefined;
    private _msdyn_saunavailableicondefault?: boolean | undefined;
    private _msdyn_scheduleboardsetting_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_scheduleboardsetting_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_scheduleboardsetting_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_scheduleboardsetting_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_scheduleboardsetting_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_scheduleboardsetting_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_scheduleboardsetting_ProcessSession?: Processsession[] | undefined;
    private _msdyn_scheduleboardsetting_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_scheduleboardsettingid?: string | undefined;
    private _msdyn_scheduleralertsview?: string | undefined;
    private _msdyn_schedulerbusinessunitdetailsview?: string | undefined;
    private _msdyn_schedulerbusinessunittooltipview?: string | undefined;
    private _msdyn_schedulercoredetailsview?: string | undefined;
    private _msdyn_schedulercoreslottexttemplate?: string | undefined;
    private _msdyn_schedulercoretooltipview?: string | undefined;
    private _msdyn_schedulerfieldservicedetailsview?: string | undefined;
    private _msdyn_schedulerfieldserviceslottexttemplate?: string | undefined;
    private _msdyn_schedulerfieldservicetooltipview?: string | undefined;
    private _msdyn_schedulerresourcedetailsview?: string | undefined;
    private _msdyn_schedulerresourcetooltipview?: string | undefined;
    private _msdyn_settings?: string | undefined;
    private _msdyn_sharetype?: number | undefined;
    private _msdyn_tabname?: string | undefined;
    private _msdyn_unscheduledrequirementsviewid?: string | undefined;
    private _msdyn_unscheduledviewid?: string | undefined;
    private _msdyn_unscheduledwopagereccount?: number | undefined;
    private _msdyn_unscheduledwotooltipsviewid?: string | undefined;
    private _msdyn_workinghourscolor?: string | undefined;
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
     * Gets the _msdyn_filterlayout_value property value. 
     * @returns a string
     */
    public get _msdyn_filterlayout_value() {
        return this.__msdyn_filterlayout_value;
    };
    /**
     * Sets the _msdyn_filterlayout_value property value. 
     * @param value Value to set for the _msdyn_filterlayout_value property.
     */
    public set _msdyn_filterlayout_value(value: string | undefined) {
        this.__msdyn_filterlayout_value = value;
    };
    /**
     * Gets the _msdyn_resourcecelltemplate_value property value. 
     * @returns a string
     */
    public get _msdyn_resourcecelltemplate_value() {
        return this.__msdyn_resourcecelltemplate_value;
    };
    /**
     * Sets the _msdyn_resourcecelltemplate_value property value. 
     * @param value Value to set for the _msdyn_resourcecelltemplate_value property.
     */
    public set _msdyn_resourcecelltemplate_value(value: string | undefined) {
        this.__msdyn_resourcecelltemplate_value = value;
    };
    /**
     * Gets the _msdyn_retrieveresourcesquery_value property value. 
     * @returns a string
     */
    public get _msdyn_retrieveresourcesquery_value() {
        return this.__msdyn_retrieveresourcesquery_value;
    };
    /**
     * Sets the _msdyn_retrieveresourcesquery_value property value. 
     * @param value Value to set for the _msdyn_retrieveresourcesquery_value property.
     */
    public set _msdyn_retrieveresourcesquery_value(value: string | undefined) {
        this.__msdyn_retrieveresourcesquery_value = value;
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
     * Instantiates a new msdyn_scheduleboardsetting and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_filterlayout_value": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting)._msdyn_filterlayout_value = n.getStringValue(); },
            "_msdyn_resourcecelltemplate_value": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting)._msdyn_resourcecelltemplate_value = n.getStringValue(); },
            "_msdyn_retrieveresourcesquery_value": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting)._msdyn_retrieveresourcesquery_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_bookbasedon": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_bookbasedon = n.getBooleanValue(); },
            "msdyn_customtabname": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_customtabname = n.getStringValue(); },
            "msdyn_customtabwebresource": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_customtabwebresource = n.getStringValue(); },
            "msdyn_FilterLayout": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_FilterLayout = n.getObjectValue<Msdyn_configuration>(createMsdyn_configurationFromDiscriminatorValue); },
            "msdyn_filtervalues": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_filtervalues = n.getStringValue(); },
            "msdyn_fullybookedcolor": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_fullybookedcolor = n.getStringValue(); },
            "msdyn_hidecancelled": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_hidecancelled = n.getBooleanValue(); },
            "msdyn_ispublic": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_ispublic = n.getBooleanValue(); },
            "msdyn_issynchronizeresources": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_issynchronizeresources = n.getBooleanValue(); },
            "msdyn_mapviewtabplacement": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_mapviewtabplacement = n.getBooleanValue(); },
            "msdyn_msdyn_scheduleboardsetting_msdyn_clientextension_scheduleboardsettingid": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_msdyn_scheduleboardsetting_msdyn_clientextension_scheduleboardsettingid = n.getCollectionOfObjectValues<Msdyn_clientextension>(createMsdyn_clientextensionFromDiscriminatorValue); },
            "msdyn_notbookedcolor": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_notbookedcolor = n.getStringValue(); },
            "msdyn_ordernumber": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_ordernumber = n.getNumberValue(); },
            "msdyn_organizationalunittooltipsviewid": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_organizationalunittooltipsviewid = n.getStringValue(); },
            "msdyn_organizationalunitviewid": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_organizationalunitviewid = n.getStringValue(); },
            "msdyn_overbookedcolor": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_overbookedcolor = n.getStringValue(); },
            "msdyn_partiallybookedcolor": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_partiallybookedcolor = n.getStringValue(); },
            "msdyn_ResourceCellTemplate": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_ResourceCellTemplate = n.getObjectValue<Msdyn_configuration>(createMsdyn_configurationFromDiscriminatorValue); },
            "msdyn_RetrieveResourcesQuery": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_RetrieveResourcesQuery = n.getObjectValue<Msdyn_configuration>(createMsdyn_configurationFromDiscriminatorValue); },
            "msdyn_saavailablecolor": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_saavailablecolor = n.getStringValue(); },
            "msdyn_saavailableicon": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_saavailableicon = n.getStringValue(); },
            "msdyn_saavailableicondefault": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_saavailableicondefault = n.getBooleanValue(); },
            "msdyn_sapartiallyavailablecolor": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_sapartiallyavailablecolor = n.getStringValue(); },
            "msdyn_sapartiallyavailableicon": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_sapartiallyavailableicon = n.getStringValue(); },
            "msdyn_sapartiallyavailableicondefault": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_sapartiallyavailableicondefault = n.getBooleanValue(); },
            "msdyn_saunavailablecolor": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_saunavailablecolor = n.getStringValue(); },
            "msdyn_saunavailableicon": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_saunavailableicon = n.getStringValue(); },
            "msdyn_saunavailableicondefault": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_saunavailableicondefault = n.getBooleanValue(); },
            "msdyn_scheduleboardsetting_AsyncOperations": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_scheduleboardsetting_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_scheduleboardsetting_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_scheduleboardsetting_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_scheduleboardsetting_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_scheduleboardsetting_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_scheduleboardsetting_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_scheduleboardsetting_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_scheduleboardsetting_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_scheduleboardsetting_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_scheduleboardsetting_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_scheduleboardsetting_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_scheduleboardsetting_ProcessSession": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_scheduleboardsetting_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_scheduleboardsetting_SyncErrors": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_scheduleboardsetting_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_scheduleboardsettingid": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_scheduleboardsettingid = n.getStringValue(); },
            "msdyn_scheduleralertsview": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_scheduleralertsview = n.getStringValue(); },
            "msdyn_schedulerbusinessunitdetailsview": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_schedulerbusinessunitdetailsview = n.getStringValue(); },
            "msdyn_schedulerbusinessunittooltipview": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_schedulerbusinessunittooltipview = n.getStringValue(); },
            "msdyn_schedulercoredetailsview": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_schedulercoredetailsview = n.getStringValue(); },
            "msdyn_schedulercoreslottexttemplate": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_schedulercoreslottexttemplate = n.getStringValue(); },
            "msdyn_schedulercoretooltipview": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_schedulercoretooltipview = n.getStringValue(); },
            "msdyn_schedulerfieldservicedetailsview": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_schedulerfieldservicedetailsview = n.getStringValue(); },
            "msdyn_schedulerfieldserviceslottexttemplate": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_schedulerfieldserviceslottexttemplate = n.getStringValue(); },
            "msdyn_schedulerfieldservicetooltipview": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_schedulerfieldservicetooltipview = n.getStringValue(); },
            "msdyn_schedulerresourcedetailsview": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_schedulerresourcedetailsview = n.getStringValue(); },
            "msdyn_schedulerresourcetooltipview": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_schedulerresourcetooltipview = n.getStringValue(); },
            "msdyn_settings": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_settings = n.getStringValue(); },
            "msdyn_sharetype": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_sharetype = n.getNumberValue(); },
            "msdyn_tabname": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_tabname = n.getStringValue(); },
            "msdyn_unscheduledrequirementsviewid": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_unscheduledrequirementsviewid = n.getStringValue(); },
            "msdyn_unscheduledviewid": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_unscheduledviewid = n.getStringValue(); },
            "msdyn_unscheduledwopagereccount": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_unscheduledwopagereccount = n.getNumberValue(); },
            "msdyn_unscheduledwotooltipsviewid": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_unscheduledwotooltipsviewid = n.getStringValue(); },
            "msdyn_workinghourscolor": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).msdyn_workinghourscolor = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_scheduleboardsetting).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_bookbasedon property value. 
     * @returns a boolean
     */
    public get msdyn_bookbasedon() {
        return this._msdyn_bookbasedon;
    };
    /**
     * Sets the msdyn_bookbasedon property value. 
     * @param value Value to set for the msdyn_bookbasedon property.
     */
    public set msdyn_bookbasedon(value: boolean | undefined) {
        this._msdyn_bookbasedon = value;
    };
    /**
     * Gets the msdyn_customtabname property value. 
     * @returns a string
     */
    public get msdyn_customtabname() {
        return this._msdyn_customtabname;
    };
    /**
     * Sets the msdyn_customtabname property value. 
     * @param value Value to set for the msdyn_customtabname property.
     */
    public set msdyn_customtabname(value: string | undefined) {
        this._msdyn_customtabname = value;
    };
    /**
     * Gets the msdyn_customtabwebresource property value. 
     * @returns a string
     */
    public get msdyn_customtabwebresource() {
        return this._msdyn_customtabwebresource;
    };
    /**
     * Sets the msdyn_customtabwebresource property value. 
     * @param value Value to set for the msdyn_customtabwebresource property.
     */
    public set msdyn_customtabwebresource(value: string | undefined) {
        this._msdyn_customtabwebresource = value;
    };
    /**
     * Gets the msdyn_FilterLayout property value. 
     * @returns a msdyn_configuration
     */
    public get msdyn_FilterLayout() {
        return this._msdyn_FilterLayout;
    };
    /**
     * Sets the msdyn_FilterLayout property value. 
     * @param value Value to set for the msdyn_FilterLayout property.
     */
    public set msdyn_FilterLayout(value: Msdyn_configuration | undefined) {
        this._msdyn_FilterLayout = value;
    };
    /**
     * Gets the msdyn_filtervalues property value. 
     * @returns a string
     */
    public get msdyn_filtervalues() {
        return this._msdyn_filtervalues;
    };
    /**
     * Sets the msdyn_filtervalues property value. 
     * @param value Value to set for the msdyn_filtervalues property.
     */
    public set msdyn_filtervalues(value: string | undefined) {
        this._msdyn_filtervalues = value;
    };
    /**
     * Gets the msdyn_fullybookedcolor property value. 
     * @returns a string
     */
    public get msdyn_fullybookedcolor() {
        return this._msdyn_fullybookedcolor;
    };
    /**
     * Sets the msdyn_fullybookedcolor property value. 
     * @param value Value to set for the msdyn_fullybookedcolor property.
     */
    public set msdyn_fullybookedcolor(value: string | undefined) {
        this._msdyn_fullybookedcolor = value;
    };
    /**
     * Gets the msdyn_hidecancelled property value. 
     * @returns a boolean
     */
    public get msdyn_hidecancelled() {
        return this._msdyn_hidecancelled;
    };
    /**
     * Sets the msdyn_hidecancelled property value. 
     * @param value Value to set for the msdyn_hidecancelled property.
     */
    public set msdyn_hidecancelled(value: boolean | undefined) {
        this._msdyn_hidecancelled = value;
    };
    /**
     * Gets the msdyn_ispublic property value. 
     * @returns a boolean
     */
    public get msdyn_ispublic() {
        return this._msdyn_ispublic;
    };
    /**
     * Sets the msdyn_ispublic property value. 
     * @param value Value to set for the msdyn_ispublic property.
     */
    public set msdyn_ispublic(value: boolean | undefined) {
        this._msdyn_ispublic = value;
    };
    /**
     * Gets the msdyn_issynchronizeresources property value. 
     * @returns a boolean
     */
    public get msdyn_issynchronizeresources() {
        return this._msdyn_issynchronizeresources;
    };
    /**
     * Sets the msdyn_issynchronizeresources property value. 
     * @param value Value to set for the msdyn_issynchronizeresources property.
     */
    public set msdyn_issynchronizeresources(value: boolean | undefined) {
        this._msdyn_issynchronizeresources = value;
    };
    /**
     * Gets the msdyn_mapviewtabplacement property value. 
     * @returns a boolean
     */
    public get msdyn_mapviewtabplacement() {
        return this._msdyn_mapviewtabplacement;
    };
    /**
     * Sets the msdyn_mapviewtabplacement property value. 
     * @param value Value to set for the msdyn_mapviewtabplacement property.
     */
    public set msdyn_mapviewtabplacement(value: boolean | undefined) {
        this._msdyn_mapviewtabplacement = value;
    };
    /**
     * Gets the msdyn_msdyn_scheduleboardsetting_msdyn_clientextension_scheduleboardsettingid property value. 
     * @returns a msdyn_clientextension
     */
    public get msdyn_msdyn_scheduleboardsetting_msdyn_clientextension_scheduleboardsettingid() {
        return this._msdyn_msdyn_scheduleboardsetting_msdyn_clientextension_scheduleboardsettingid;
    };
    /**
     * Sets the msdyn_msdyn_scheduleboardsetting_msdyn_clientextension_scheduleboardsettingid property value. 
     * @param value Value to set for the msdyn_msdyn_scheduleboardsetting_msdyn_clientextension_scheduleboardsettingid property.
     */
    public set msdyn_msdyn_scheduleboardsetting_msdyn_clientextension_scheduleboardsettingid(value: Msdyn_clientextension[] | undefined) {
        this._msdyn_msdyn_scheduleboardsetting_msdyn_clientextension_scheduleboardsettingid = value;
    };
    /**
     * Gets the msdyn_notbookedcolor property value. 
     * @returns a string
     */
    public get msdyn_notbookedcolor() {
        return this._msdyn_notbookedcolor;
    };
    /**
     * Sets the msdyn_notbookedcolor property value. 
     * @param value Value to set for the msdyn_notbookedcolor property.
     */
    public set msdyn_notbookedcolor(value: string | undefined) {
        this._msdyn_notbookedcolor = value;
    };
    /**
     * Gets the msdyn_ordernumber property value. 
     * @returns a integer
     */
    public get msdyn_ordernumber() {
        return this._msdyn_ordernumber;
    };
    /**
     * Sets the msdyn_ordernumber property value. 
     * @param value Value to set for the msdyn_ordernumber property.
     */
    public set msdyn_ordernumber(value: number | undefined) {
        this._msdyn_ordernumber = value;
    };
    /**
     * Gets the msdyn_organizationalunittooltipsviewid property value. 
     * @returns a string
     */
    public get msdyn_organizationalunittooltipsviewid() {
        return this._msdyn_organizationalunittooltipsviewid;
    };
    /**
     * Sets the msdyn_organizationalunittooltipsviewid property value. 
     * @param value Value to set for the msdyn_organizationalunittooltipsviewid property.
     */
    public set msdyn_organizationalunittooltipsviewid(value: string | undefined) {
        this._msdyn_organizationalunittooltipsviewid = value;
    };
    /**
     * Gets the msdyn_organizationalunitviewid property value. 
     * @returns a string
     */
    public get msdyn_organizationalunitviewid() {
        return this._msdyn_organizationalunitviewid;
    };
    /**
     * Sets the msdyn_organizationalunitviewid property value. 
     * @param value Value to set for the msdyn_organizationalunitviewid property.
     */
    public set msdyn_organizationalunitviewid(value: string | undefined) {
        this._msdyn_organizationalunitviewid = value;
    };
    /**
     * Gets the msdyn_overbookedcolor property value. 
     * @returns a string
     */
    public get msdyn_overbookedcolor() {
        return this._msdyn_overbookedcolor;
    };
    /**
     * Sets the msdyn_overbookedcolor property value. 
     * @param value Value to set for the msdyn_overbookedcolor property.
     */
    public set msdyn_overbookedcolor(value: string | undefined) {
        this._msdyn_overbookedcolor = value;
    };
    /**
     * Gets the msdyn_partiallybookedcolor property value. 
     * @returns a string
     */
    public get msdyn_partiallybookedcolor() {
        return this._msdyn_partiallybookedcolor;
    };
    /**
     * Sets the msdyn_partiallybookedcolor property value. 
     * @param value Value to set for the msdyn_partiallybookedcolor property.
     */
    public set msdyn_partiallybookedcolor(value: string | undefined) {
        this._msdyn_partiallybookedcolor = value;
    };
    /**
     * Gets the msdyn_ResourceCellTemplate property value. 
     * @returns a msdyn_configuration
     */
    public get msdyn_ResourceCellTemplate() {
        return this._msdyn_ResourceCellTemplate;
    };
    /**
     * Sets the msdyn_ResourceCellTemplate property value. 
     * @param value Value to set for the msdyn_ResourceCellTemplate property.
     */
    public set msdyn_ResourceCellTemplate(value: Msdyn_configuration | undefined) {
        this._msdyn_ResourceCellTemplate = value;
    };
    /**
     * Gets the msdyn_RetrieveResourcesQuery property value. 
     * @returns a msdyn_configuration
     */
    public get msdyn_RetrieveResourcesQuery() {
        return this._msdyn_RetrieveResourcesQuery;
    };
    /**
     * Sets the msdyn_RetrieveResourcesQuery property value. 
     * @param value Value to set for the msdyn_RetrieveResourcesQuery property.
     */
    public set msdyn_RetrieveResourcesQuery(value: Msdyn_configuration | undefined) {
        this._msdyn_RetrieveResourcesQuery = value;
    };
    /**
     * Gets the msdyn_saavailablecolor property value. 
     * @returns a string
     */
    public get msdyn_saavailablecolor() {
        return this._msdyn_saavailablecolor;
    };
    /**
     * Sets the msdyn_saavailablecolor property value. 
     * @param value Value to set for the msdyn_saavailablecolor property.
     */
    public set msdyn_saavailablecolor(value: string | undefined) {
        this._msdyn_saavailablecolor = value;
    };
    /**
     * Gets the msdyn_saavailableicon property value. 
     * @returns a string
     */
    public get msdyn_saavailableicon() {
        return this._msdyn_saavailableicon;
    };
    /**
     * Sets the msdyn_saavailableicon property value. 
     * @param value Value to set for the msdyn_saavailableicon property.
     */
    public set msdyn_saavailableicon(value: string | undefined) {
        this._msdyn_saavailableicon = value;
    };
    /**
     * Gets the msdyn_saavailableicondefault property value. 
     * @returns a boolean
     */
    public get msdyn_saavailableicondefault() {
        return this._msdyn_saavailableicondefault;
    };
    /**
     * Sets the msdyn_saavailableicondefault property value. 
     * @param value Value to set for the msdyn_saavailableicondefault property.
     */
    public set msdyn_saavailableicondefault(value: boolean | undefined) {
        this._msdyn_saavailableicondefault = value;
    };
    /**
     * Gets the msdyn_sapartiallyavailablecolor property value. 
     * @returns a string
     */
    public get msdyn_sapartiallyavailablecolor() {
        return this._msdyn_sapartiallyavailablecolor;
    };
    /**
     * Sets the msdyn_sapartiallyavailablecolor property value. 
     * @param value Value to set for the msdyn_sapartiallyavailablecolor property.
     */
    public set msdyn_sapartiallyavailablecolor(value: string | undefined) {
        this._msdyn_sapartiallyavailablecolor = value;
    };
    /**
     * Gets the msdyn_sapartiallyavailableicon property value. 
     * @returns a string
     */
    public get msdyn_sapartiallyavailableicon() {
        return this._msdyn_sapartiallyavailableicon;
    };
    /**
     * Sets the msdyn_sapartiallyavailableicon property value. 
     * @param value Value to set for the msdyn_sapartiallyavailableicon property.
     */
    public set msdyn_sapartiallyavailableicon(value: string | undefined) {
        this._msdyn_sapartiallyavailableicon = value;
    };
    /**
     * Gets the msdyn_sapartiallyavailableicondefault property value. 
     * @returns a boolean
     */
    public get msdyn_sapartiallyavailableicondefault() {
        return this._msdyn_sapartiallyavailableicondefault;
    };
    /**
     * Sets the msdyn_sapartiallyavailableicondefault property value. 
     * @param value Value to set for the msdyn_sapartiallyavailableicondefault property.
     */
    public set msdyn_sapartiallyavailableicondefault(value: boolean | undefined) {
        this._msdyn_sapartiallyavailableicondefault = value;
    };
    /**
     * Gets the msdyn_saunavailablecolor property value. 
     * @returns a string
     */
    public get msdyn_saunavailablecolor() {
        return this._msdyn_saunavailablecolor;
    };
    /**
     * Sets the msdyn_saunavailablecolor property value. 
     * @param value Value to set for the msdyn_saunavailablecolor property.
     */
    public set msdyn_saunavailablecolor(value: string | undefined) {
        this._msdyn_saunavailablecolor = value;
    };
    /**
     * Gets the msdyn_saunavailableicon property value. 
     * @returns a string
     */
    public get msdyn_saunavailableicon() {
        return this._msdyn_saunavailableicon;
    };
    /**
     * Sets the msdyn_saunavailableicon property value. 
     * @param value Value to set for the msdyn_saunavailableicon property.
     */
    public set msdyn_saunavailableicon(value: string | undefined) {
        this._msdyn_saunavailableicon = value;
    };
    /**
     * Gets the msdyn_saunavailableicondefault property value. 
     * @returns a boolean
     */
    public get msdyn_saunavailableicondefault() {
        return this._msdyn_saunavailableicondefault;
    };
    /**
     * Sets the msdyn_saunavailableicondefault property value. 
     * @param value Value to set for the msdyn_saunavailableicondefault property.
     */
    public set msdyn_saunavailableicondefault(value: boolean | undefined) {
        this._msdyn_saunavailableicondefault = value;
    };
    /**
     * Gets the msdyn_scheduleboardsetting_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_scheduleboardsetting_AsyncOperations() {
        return this._msdyn_scheduleboardsetting_AsyncOperations;
    };
    /**
     * Sets the msdyn_scheduleboardsetting_AsyncOperations property value. 
     * @param value Value to set for the msdyn_scheduleboardsetting_AsyncOperations property.
     */
    public set msdyn_scheduleboardsetting_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_scheduleboardsetting_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_scheduleboardsetting_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_scheduleboardsetting_BulkDeleteFailures() {
        return this._msdyn_scheduleboardsetting_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_scheduleboardsetting_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_scheduleboardsetting_BulkDeleteFailures property.
     */
    public set msdyn_scheduleboardsetting_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_scheduleboardsetting_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_scheduleboardsetting_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_scheduleboardsetting_DuplicateBaseRecord() {
        return this._msdyn_scheduleboardsetting_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_scheduleboardsetting_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_scheduleboardsetting_DuplicateBaseRecord property.
     */
    public set msdyn_scheduleboardsetting_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_scheduleboardsetting_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_scheduleboardsetting_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_scheduleboardsetting_DuplicateMatchingRecord() {
        return this._msdyn_scheduleboardsetting_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_scheduleboardsetting_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_scheduleboardsetting_DuplicateMatchingRecord property.
     */
    public set msdyn_scheduleboardsetting_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_scheduleboardsetting_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_scheduleboardsetting_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_scheduleboardsetting_MailboxTrackingFolders() {
        return this._msdyn_scheduleboardsetting_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_scheduleboardsetting_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_scheduleboardsetting_MailboxTrackingFolders property.
     */
    public set msdyn_scheduleboardsetting_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_scheduleboardsetting_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_scheduleboardsetting_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_scheduleboardsetting_PrincipalObjectAttributeAccesses() {
        return this._msdyn_scheduleboardsetting_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_scheduleboardsetting_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_scheduleboardsetting_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_scheduleboardsetting_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_scheduleboardsetting_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_scheduleboardsetting_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_scheduleboardsetting_ProcessSession() {
        return this._msdyn_scheduleboardsetting_ProcessSession;
    };
    /**
     * Sets the msdyn_scheduleboardsetting_ProcessSession property value. 
     * @param value Value to set for the msdyn_scheduleboardsetting_ProcessSession property.
     */
    public set msdyn_scheduleboardsetting_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_scheduleboardsetting_ProcessSession = value;
    };
    /**
     * Gets the msdyn_scheduleboardsetting_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_scheduleboardsetting_SyncErrors() {
        return this._msdyn_scheduleboardsetting_SyncErrors;
    };
    /**
     * Sets the msdyn_scheduleboardsetting_SyncErrors property value. 
     * @param value Value to set for the msdyn_scheduleboardsetting_SyncErrors property.
     */
    public set msdyn_scheduleboardsetting_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_scheduleboardsetting_SyncErrors = value;
    };
    /**
     * Gets the msdyn_scheduleboardsettingid property value. 
     * @returns a string
     */
    public get msdyn_scheduleboardsettingid() {
        return this._msdyn_scheduleboardsettingid;
    };
    /**
     * Sets the msdyn_scheduleboardsettingid property value. 
     * @param value Value to set for the msdyn_scheduleboardsettingid property.
     */
    public set msdyn_scheduleboardsettingid(value: string | undefined) {
        this._msdyn_scheduleboardsettingid = value;
    };
    /**
     * Gets the msdyn_scheduleralertsview property value. 
     * @returns a string
     */
    public get msdyn_scheduleralertsview() {
        return this._msdyn_scheduleralertsview;
    };
    /**
     * Sets the msdyn_scheduleralertsview property value. 
     * @param value Value to set for the msdyn_scheduleralertsview property.
     */
    public set msdyn_scheduleralertsview(value: string | undefined) {
        this._msdyn_scheduleralertsview = value;
    };
    /**
     * Gets the msdyn_schedulerbusinessunitdetailsview property value. 
     * @returns a string
     */
    public get msdyn_schedulerbusinessunitdetailsview() {
        return this._msdyn_schedulerbusinessunitdetailsview;
    };
    /**
     * Sets the msdyn_schedulerbusinessunitdetailsview property value. 
     * @param value Value to set for the msdyn_schedulerbusinessunitdetailsview property.
     */
    public set msdyn_schedulerbusinessunitdetailsview(value: string | undefined) {
        this._msdyn_schedulerbusinessunitdetailsview = value;
    };
    /**
     * Gets the msdyn_schedulerbusinessunittooltipview property value. 
     * @returns a string
     */
    public get msdyn_schedulerbusinessunittooltipview() {
        return this._msdyn_schedulerbusinessunittooltipview;
    };
    /**
     * Sets the msdyn_schedulerbusinessunittooltipview property value. 
     * @param value Value to set for the msdyn_schedulerbusinessunittooltipview property.
     */
    public set msdyn_schedulerbusinessunittooltipview(value: string | undefined) {
        this._msdyn_schedulerbusinessunittooltipview = value;
    };
    /**
     * Gets the msdyn_schedulercoredetailsview property value. 
     * @returns a string
     */
    public get msdyn_schedulercoredetailsview() {
        return this._msdyn_schedulercoredetailsview;
    };
    /**
     * Sets the msdyn_schedulercoredetailsview property value. 
     * @param value Value to set for the msdyn_schedulercoredetailsview property.
     */
    public set msdyn_schedulercoredetailsview(value: string | undefined) {
        this._msdyn_schedulercoredetailsview = value;
    };
    /**
     * Gets the msdyn_schedulercoreslottexttemplate property value. 
     * @returns a string
     */
    public get msdyn_schedulercoreslottexttemplate() {
        return this._msdyn_schedulercoreslottexttemplate;
    };
    /**
     * Sets the msdyn_schedulercoreslottexttemplate property value. 
     * @param value Value to set for the msdyn_schedulercoreslottexttemplate property.
     */
    public set msdyn_schedulercoreslottexttemplate(value: string | undefined) {
        this._msdyn_schedulercoreslottexttemplate = value;
    };
    /**
     * Gets the msdyn_schedulercoretooltipview property value. 
     * @returns a string
     */
    public get msdyn_schedulercoretooltipview() {
        return this._msdyn_schedulercoretooltipview;
    };
    /**
     * Sets the msdyn_schedulercoretooltipview property value. 
     * @param value Value to set for the msdyn_schedulercoretooltipview property.
     */
    public set msdyn_schedulercoretooltipview(value: string | undefined) {
        this._msdyn_schedulercoretooltipview = value;
    };
    /**
     * Gets the msdyn_schedulerfieldservicedetailsview property value. 
     * @returns a string
     */
    public get msdyn_schedulerfieldservicedetailsview() {
        return this._msdyn_schedulerfieldservicedetailsview;
    };
    /**
     * Sets the msdyn_schedulerfieldservicedetailsview property value. 
     * @param value Value to set for the msdyn_schedulerfieldservicedetailsview property.
     */
    public set msdyn_schedulerfieldservicedetailsview(value: string | undefined) {
        this._msdyn_schedulerfieldservicedetailsview = value;
    };
    /**
     * Gets the msdyn_schedulerfieldserviceslottexttemplate property value. 
     * @returns a string
     */
    public get msdyn_schedulerfieldserviceslottexttemplate() {
        return this._msdyn_schedulerfieldserviceslottexttemplate;
    };
    /**
     * Sets the msdyn_schedulerfieldserviceslottexttemplate property value. 
     * @param value Value to set for the msdyn_schedulerfieldserviceslottexttemplate property.
     */
    public set msdyn_schedulerfieldserviceslottexttemplate(value: string | undefined) {
        this._msdyn_schedulerfieldserviceslottexttemplate = value;
    };
    /**
     * Gets the msdyn_schedulerfieldservicetooltipview property value. 
     * @returns a string
     */
    public get msdyn_schedulerfieldservicetooltipview() {
        return this._msdyn_schedulerfieldservicetooltipview;
    };
    /**
     * Sets the msdyn_schedulerfieldservicetooltipview property value. 
     * @param value Value to set for the msdyn_schedulerfieldservicetooltipview property.
     */
    public set msdyn_schedulerfieldservicetooltipview(value: string | undefined) {
        this._msdyn_schedulerfieldservicetooltipview = value;
    };
    /**
     * Gets the msdyn_schedulerresourcedetailsview property value. 
     * @returns a string
     */
    public get msdyn_schedulerresourcedetailsview() {
        return this._msdyn_schedulerresourcedetailsview;
    };
    /**
     * Sets the msdyn_schedulerresourcedetailsview property value. 
     * @param value Value to set for the msdyn_schedulerresourcedetailsview property.
     */
    public set msdyn_schedulerresourcedetailsview(value: string | undefined) {
        this._msdyn_schedulerresourcedetailsview = value;
    };
    /**
     * Gets the msdyn_schedulerresourcetooltipview property value. 
     * @returns a string
     */
    public get msdyn_schedulerresourcetooltipview() {
        return this._msdyn_schedulerresourcetooltipview;
    };
    /**
     * Sets the msdyn_schedulerresourcetooltipview property value. 
     * @param value Value to set for the msdyn_schedulerresourcetooltipview property.
     */
    public set msdyn_schedulerresourcetooltipview(value: string | undefined) {
        this._msdyn_schedulerresourcetooltipview = value;
    };
    /**
     * Gets the msdyn_settings property value. 
     * @returns a string
     */
    public get msdyn_settings() {
        return this._msdyn_settings;
    };
    /**
     * Sets the msdyn_settings property value. 
     * @param value Value to set for the msdyn_settings property.
     */
    public set msdyn_settings(value: string | undefined) {
        this._msdyn_settings = value;
    };
    /**
     * Gets the msdyn_sharetype property value. 
     * @returns a integer
     */
    public get msdyn_sharetype() {
        return this._msdyn_sharetype;
    };
    /**
     * Sets the msdyn_sharetype property value. 
     * @param value Value to set for the msdyn_sharetype property.
     */
    public set msdyn_sharetype(value: number | undefined) {
        this._msdyn_sharetype = value;
    };
    /**
     * Gets the msdyn_tabname property value. 
     * @returns a string
     */
    public get msdyn_tabname() {
        return this._msdyn_tabname;
    };
    /**
     * Sets the msdyn_tabname property value. 
     * @param value Value to set for the msdyn_tabname property.
     */
    public set msdyn_tabname(value: string | undefined) {
        this._msdyn_tabname = value;
    };
    /**
     * Gets the msdyn_unscheduledrequirementsviewid property value. 
     * @returns a string
     */
    public get msdyn_unscheduledrequirementsviewid() {
        return this._msdyn_unscheduledrequirementsviewid;
    };
    /**
     * Sets the msdyn_unscheduledrequirementsviewid property value. 
     * @param value Value to set for the msdyn_unscheduledrequirementsviewid property.
     */
    public set msdyn_unscheduledrequirementsviewid(value: string | undefined) {
        this._msdyn_unscheduledrequirementsviewid = value;
    };
    /**
     * Gets the msdyn_unscheduledviewid property value. 
     * @returns a string
     */
    public get msdyn_unscheduledviewid() {
        return this._msdyn_unscheduledviewid;
    };
    /**
     * Sets the msdyn_unscheduledviewid property value. 
     * @param value Value to set for the msdyn_unscheduledviewid property.
     */
    public set msdyn_unscheduledviewid(value: string | undefined) {
        this._msdyn_unscheduledviewid = value;
    };
    /**
     * Gets the msdyn_unscheduledwopagereccount property value. 
     * @returns a integer
     */
    public get msdyn_unscheduledwopagereccount() {
        return this._msdyn_unscheduledwopagereccount;
    };
    /**
     * Sets the msdyn_unscheduledwopagereccount property value. 
     * @param value Value to set for the msdyn_unscheduledwopagereccount property.
     */
    public set msdyn_unscheduledwopagereccount(value: number | undefined) {
        this._msdyn_unscheduledwopagereccount = value;
    };
    /**
     * Gets the msdyn_unscheduledwotooltipsviewid property value. 
     * @returns a string
     */
    public get msdyn_unscheduledwotooltipsviewid() {
        return this._msdyn_unscheduledwotooltipsviewid;
    };
    /**
     * Sets the msdyn_unscheduledwotooltipsviewid property value. 
     * @param value Value to set for the msdyn_unscheduledwotooltipsviewid property.
     */
    public set msdyn_unscheduledwotooltipsviewid(value: string | undefined) {
        this._msdyn_unscheduledwotooltipsviewid = value;
    };
    /**
     * Gets the msdyn_workinghourscolor property value. 
     * @returns a string
     */
    public get msdyn_workinghourscolor() {
        return this._msdyn_workinghourscolor;
    };
    /**
     * Sets the msdyn_workinghourscolor property value. 
     * @param value Value to set for the msdyn_workinghourscolor property.
     */
    public set msdyn_workinghourscolor(value: string | undefined) {
        this._msdyn_workinghourscolor = value;
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
        writer.writeStringValue("_msdyn_filterlayout_value", this._msdyn_filterlayout_value);
        writer.writeStringValue("_msdyn_resourcecelltemplate_value", this._msdyn_resourcecelltemplate_value);
        writer.writeStringValue("_msdyn_retrieveresourcesquery_value", this._msdyn_retrieveresourcesquery_value);
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
        writer.writeBooleanValue("msdyn_bookbasedon", this.msdyn_bookbasedon);
        writer.writeStringValue("msdyn_customtabname", this.msdyn_customtabname);
        writer.writeStringValue("msdyn_customtabwebresource", this.msdyn_customtabwebresource);
        writer.writeObjectValue<Msdyn_configuration>("msdyn_FilterLayout", this.msdyn_FilterLayout);
        writer.writeStringValue("msdyn_filtervalues", this.msdyn_filtervalues);
        writer.writeStringValue("msdyn_fullybookedcolor", this.msdyn_fullybookedcolor);
        writer.writeBooleanValue("msdyn_hidecancelled", this.msdyn_hidecancelled);
        writer.writeBooleanValue("msdyn_ispublic", this.msdyn_ispublic);
        writer.writeBooleanValue("msdyn_issynchronizeresources", this.msdyn_issynchronizeresources);
        writer.writeBooleanValue("msdyn_mapviewtabplacement", this.msdyn_mapviewtabplacement);
        writer.writeCollectionOfObjectValues<Msdyn_clientextension>("msdyn_msdyn_scheduleboardsetting_msdyn_clientextension_scheduleboardsettingid", this.msdyn_msdyn_scheduleboardsetting_msdyn_clientextension_scheduleboardsettingid);
        writer.writeStringValue("msdyn_notbookedcolor", this.msdyn_notbookedcolor);
        writer.writeNumberValue("msdyn_ordernumber", this.msdyn_ordernumber);
        writer.writeStringValue("msdyn_organizationalunittooltipsviewid", this.msdyn_organizationalunittooltipsviewid);
        writer.writeStringValue("msdyn_organizationalunitviewid", this.msdyn_organizationalunitviewid);
        writer.writeStringValue("msdyn_overbookedcolor", this.msdyn_overbookedcolor);
        writer.writeStringValue("msdyn_partiallybookedcolor", this.msdyn_partiallybookedcolor);
        writer.writeObjectValue<Msdyn_configuration>("msdyn_ResourceCellTemplate", this.msdyn_ResourceCellTemplate);
        writer.writeObjectValue<Msdyn_configuration>("msdyn_RetrieveResourcesQuery", this.msdyn_RetrieveResourcesQuery);
        writer.writeStringValue("msdyn_saavailablecolor", this.msdyn_saavailablecolor);
        writer.writeStringValue("msdyn_saavailableicon", this.msdyn_saavailableicon);
        writer.writeBooleanValue("msdyn_saavailableicondefault", this.msdyn_saavailableicondefault);
        writer.writeStringValue("msdyn_sapartiallyavailablecolor", this.msdyn_sapartiallyavailablecolor);
        writer.writeStringValue("msdyn_sapartiallyavailableicon", this.msdyn_sapartiallyavailableicon);
        writer.writeBooleanValue("msdyn_sapartiallyavailableicondefault", this.msdyn_sapartiallyavailableicondefault);
        writer.writeStringValue("msdyn_saunavailablecolor", this.msdyn_saunavailablecolor);
        writer.writeStringValue("msdyn_saunavailableicon", this.msdyn_saunavailableicon);
        writer.writeBooleanValue("msdyn_saunavailableicondefault", this.msdyn_saunavailableicondefault);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_scheduleboardsetting_AsyncOperations", this.msdyn_scheduleboardsetting_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_scheduleboardsetting_BulkDeleteFailures", this.msdyn_scheduleboardsetting_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_scheduleboardsetting_DuplicateBaseRecord", this.msdyn_scheduleboardsetting_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_scheduleboardsetting_DuplicateMatchingRecord", this.msdyn_scheduleboardsetting_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_scheduleboardsetting_MailboxTrackingFolders", this.msdyn_scheduleboardsetting_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_scheduleboardsetting_PrincipalObjectAttributeAccesses", this.msdyn_scheduleboardsetting_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_scheduleboardsetting_ProcessSession", this.msdyn_scheduleboardsetting_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_scheduleboardsetting_SyncErrors", this.msdyn_scheduleboardsetting_SyncErrors);
        writer.writeStringValue("msdyn_scheduleboardsettingid", this.msdyn_scheduleboardsettingid);
        writer.writeStringValue("msdyn_scheduleralertsview", this.msdyn_scheduleralertsview);
        writer.writeStringValue("msdyn_schedulerbusinessunitdetailsview", this.msdyn_schedulerbusinessunitdetailsview);
        writer.writeStringValue("msdyn_schedulerbusinessunittooltipview", this.msdyn_schedulerbusinessunittooltipview);
        writer.writeStringValue("msdyn_schedulercoredetailsview", this.msdyn_schedulercoredetailsview);
        writer.writeStringValue("msdyn_schedulercoreslottexttemplate", this.msdyn_schedulercoreslottexttemplate);
        writer.writeStringValue("msdyn_schedulercoretooltipview", this.msdyn_schedulercoretooltipview);
        writer.writeStringValue("msdyn_schedulerfieldservicedetailsview", this.msdyn_schedulerfieldservicedetailsview);
        writer.writeStringValue("msdyn_schedulerfieldserviceslottexttemplate", this.msdyn_schedulerfieldserviceslottexttemplate);
        writer.writeStringValue("msdyn_schedulerfieldservicetooltipview", this.msdyn_schedulerfieldservicetooltipview);
        writer.writeStringValue("msdyn_schedulerresourcedetailsview", this.msdyn_schedulerresourcedetailsview);
        writer.writeStringValue("msdyn_schedulerresourcetooltipview", this.msdyn_schedulerresourcetooltipview);
        writer.writeStringValue("msdyn_settings", this.msdyn_settings);
        writer.writeNumberValue("msdyn_sharetype", this.msdyn_sharetype);
        writer.writeStringValue("msdyn_tabname", this.msdyn_tabname);
        writer.writeStringValue("msdyn_unscheduledrequirementsviewid", this.msdyn_unscheduledrequirementsviewid);
        writer.writeStringValue("msdyn_unscheduledviewid", this.msdyn_unscheduledviewid);
        writer.writeNumberValue("msdyn_unscheduledwopagereccount", this.msdyn_unscheduledwopagereccount);
        writer.writeStringValue("msdyn_unscheduledwotooltipsviewid", this.msdyn_unscheduledwotooltipsviewid);
        writer.writeStringValue("msdyn_workinghourscolor", this.msdyn_workinghourscolor);
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
